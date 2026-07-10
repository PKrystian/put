#!/usr/bin/env python3

import sys
import os
import queue
import threading
import time
import logging
from datetime import datetime, timedelta
from pathlib import Path
from typing import Optional

import numpy as np
import sounddevice as sd
import whisper
from PyQt6.QtWidgets import (
    QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout,
    QPushButton, QLabel, QLineEdit, QFileDialog, QTextEdit, QMessageBox,
    QGroupBox, QFormLayout, QComboBox
)
from PyQt6.QtCore import Qt, pyqtSignal, QThread, QTimer
from PyQt6.QtGui import QFont, QColor

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


class TranscriptionWorker(QThread):
    status_changed = pyqtSignal(str)
    transcription_updated = pyqtSignal(str)
    error_occurred = pyqtSignal(str)

    def __init__(self, output_path: str, model_size: str = "medium"):
        super().__init__()
        self.output_path = output_path
        self.model_size = model_size
        self.is_running = False
        self.is_paused = False
        self.audio_queue = queue.Queue()

        self.samplerate = 16000
        self.blocksize = 4000
        self.buffer_seconds = 20

        try:
            self.model = whisper.load_model(model_size)
            logger.info(f"Whisper model '{model_size}' loaded successfully")
        except Exception as e:
            self.error_occurred.emit(f"Failed to load Whisper model: {str(e)}")
            self.model = None

        self.stream = None
        self.start_time = None
        self.last_section_time = None
        self.filepath = None

    def setup_output_file(self) -> bool:
        try:
            date_str = datetime.now().strftime("%Y-%m-%d")
            filename = f"{date_str}-transcription.md"
            self.filepath = os.path.join(self.output_path, filename)

            os.makedirs(self.output_path, exist_ok=True)

            if not os.path.exists(self.filepath):
                with open(self.filepath, "w", encoding="utf-8") as f:
                    f.write(f"# Transcription - {date_str}\n\n")

            self.status_changed.emit(f"Output file: {self.filepath}")
            logger.info(f"Output file set to: {self.filepath}")
            return True
        except Exception as e:
            error_msg = f"Failed to setup output file: {str(e)}"
            self.error_occurred.emit(error_msg)
            logger.error(error_msg)
            return False

    def audio_callback(self, indata, frames, time_info, status):
        if status:
            logger.warning(f"Audio status: {status}")
        if self.is_running and not self.is_paused:
            self.audio_queue.put(indata.copy())

    @staticmethod
    def format_timestamp(seconds: int) -> str:
        return str(timedelta(seconds=seconds))

    def run(self):
        if not self.model:
            self.error_occurred.emit("Model failed to load. Cannot start transcription.")
            return

        if not self.setup_output_file():
            return

        self.is_running = True
        self.start_time = time.time()
        self.last_section_time = self.start_time

        try:
            self.stream = sd.InputStream(
                callback=self.audio_callback,
                channels=1,
                samplerate=self.samplerate,
                blocksize=self.blocksize
            )
            self.stream.start()
            self.status_changed.emit("Listening to audio...")
            logger.info("Audio stream started")

            buffer = np.zeros((0, 1))

            while self.is_running:
                if self.is_paused:
                    time.sleep(0.1)
                    continue

                try:
                    block = self.audio_queue.get(timeout=1)
                    buffer = np.concatenate((buffer, block))

                    if buffer.shape[0] >= self.samplerate * self.buffer_seconds:
                        self.process_audio_buffer(buffer)
                        buffer = np.zeros((0, 1))
                except queue.Empty:
                    continue
                except Exception as e:
                    logger.error(f"Error in transcription loop: {str(e)}")
                    self.error_occurred.emit(f"Transcription error: {str(e)}")

        except Exception as e:
            error_msg = f"Fatal error: {str(e)}"
            self.error_occurred.emit(error_msg)
            logger.error(error_msg)
        finally:
            self.cleanup()

    def process_audio_buffer(self, buffer: np.ndarray):
        try:
            audio = buffer.flatten().astype(np.float32)
            elapsed = int(time.time() - self.start_time)
            timestamp = self.format_timestamp(elapsed)

            result = self.model.transcribe(audio, fp16=False, language="pl")
            text = result["text"].strip()

            if text:
                md_text = f"### [{timestamp}]\n{text}\n"

                if (elapsed // 600) > ((self.last_section_time - self.start_time) // 600):
                    md_text = "\n---\n" + md_text
                    self.last_section_time = time.time()

                with open(self.filepath, "a", encoding="utf-8") as f:
                    f.write(md_text)

                self.transcription_updated.emit(f"[{timestamp}] {text}")
                logger.info(f"Transcribed: {text[:50]}...")

        except Exception as e:
            logger.error(f"Error processing audio buffer: {str(e)}")
            self.error_occurred.emit(f"Processing error: {str(e)}")

    def pause(self):
        self.is_paused = True
        self.status_changed.emit("Paused")
        logger.info("Transcription paused")

    def resume(self):
        self.is_paused = False
        self.status_changed.emit("Resumed")
        logger.info("Transcription resumed")

    def stop(self):
        self.is_running = False
        logger.info("Stop signal sent")

    def cleanup(self):
        if self.stream:
            self.stream.stop()
            self.stream.close()
            logger.info("Audio stream closed")
        self.status_changed.emit("Transcription stopped")


class VoiceToTextApp(QMainWindow):
    def __init__(self):
        super().__init__()
        self.worker_thread: Optional[TranscriptionWorker] = None
        self.init_ui()
        self.setWindowTitle("Voice-to-Text Transcription App")
        self.setGeometry(100, 100, 900, 700)

    def init_ui(self):
        central_widget = QWidget()
        self.setCentralWidget(central_widget)

        main_layout = QVBoxLayout()
        central_widget.setLayout(main_layout)

        path_group = self.create_path_selection_group()
        main_layout.addWidget(path_group)

        settings_group = self.create_settings_group()
        main_layout.addWidget(settings_group)

        buttons_group = self.create_control_buttons_group()
        main_layout.addWidget(buttons_group)

        status_group = self.create_status_group()
        main_layout.addWidget(status_group)

        transcription_group = self.create_transcription_group()
        main_layout.addWidget(transcription_group, 1)

    def create_path_selection_group(self) -> QGroupBox:
        group = QGroupBox("Output Configuration")
        layout = QHBoxLayout()

        label = QLabel("Output Folder:")
        self.path_input = QLineEdit()
        self.path_input.setPlaceholderText("Select a folder for transcriptions...")
        self.path_input.setReadOnly(True)

        browse_btn = QPushButton("Browse")
        browse_btn.clicked.connect(self.select_output_path)

        clear_btn = QPushButton("Clear")
        clear_btn.clicked.connect(self.clear_output_path)

        layout.addWidget(label)
        layout.addWidget(self.path_input, 1)
        layout.addWidget(browse_btn)
        layout.addWidget(clear_btn)

        group.setLayout(layout)
        return group

    def create_settings_group(self) -> QGroupBox:
        group = QGroupBox("Settings")
        layout = QFormLayout()

        model_label = QLabel("Model Size:")
        self.model_combo = QComboBox()
        self.model_combo.addItems(["tiny", "base", "small", "medium", "large"])
        self.model_combo.setCurrentText("medium")
        layout.addRow(model_label, self.model_combo)

        group.setLayout(layout)
        return group

    def create_control_buttons_group(self) -> QGroupBox:
        group = QGroupBox("Controls")
        layout = QHBoxLayout()

        self.start_btn = QPushButton("Start")
        self.start_btn.clicked.connect(self.start_transcription)
        self.start_btn.setStyleSheet("background-color: #4CAF50; color: white; font-weight: bold;")

        self.pause_btn = QPushButton("Pause")
        self.pause_btn.clicked.connect(self.pause_transcription)
        self.pause_btn.setEnabled(False)
        self.pause_btn.setStyleSheet("background-color: #FFC107; color: black; font-weight: bold;")

        self.stop_btn = QPushButton("Stop")
        self.stop_btn.clicked.connect(self.stop_transcription)
        self.stop_btn.setEnabled(False)
        self.stop_btn.setStyleSheet("background-color: #f44336; color: white; font-weight: bold;")

        layout.addWidget(self.start_btn)
        layout.addWidget(self.pause_btn)
        layout.addWidget(self.stop_btn)
        layout.addStretch()

        group.setLayout(layout)
        return group

    def create_status_group(self) -> QGroupBox:
        group = QGroupBox("Status")
        layout = QVBoxLayout()

        self.status_label = QLabel("Ready")
        self.status_label.setStyleSheet("color: #2196F3; font-weight: bold; font-size: 12px;")
        self.status_label.setWordWrap(True)

        layout.addWidget(self.status_label)
        group.setLayout(layout)
        return group

    def create_transcription_group(self) -> QGroupBox:
        group = QGroupBox("Last Transcription")
        layout = QVBoxLayout()

        self.transcription_display = QTextEdit()
        self.transcription_display.setReadOnly(True)
        self.transcription_display.setStyleSheet("""
            background-color: #f5f5f5;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 8px;
            font-family: 'Courier New', monospace;
            font-size: 11px;
        """)

        layout.addWidget(self.transcription_display)
        group.setLayout(layout)
        return group

    def select_output_path(self):
        if self.worker_thread and self.worker_thread.is_running:
            QMessageBox.warning(self, "Warning", "Stop transcription before changing the path")
            return

        path = QFileDialog.getExistingDirectory(self, "Select Output Folder")
        if path:
            self.path_input.setText(path)
            self.update_status(f"Output folder selected: {os.path.basename(path)}")

    def clear_output_path(self):
        if self.worker_thread and self.worker_thread.is_running:
            QMessageBox.warning(self, "Warning", "Stop transcription before clearing the path")
            return

        self.path_input.clear()
        self.update_status("Output folder cleared")

    def start_transcription(self):
        output_path = self.path_input.text().strip()

        if not output_path:
            QMessageBox.warning(self, "Error", "Please select an output folder")
            return

        if not os.path.isdir(output_path):
            QMessageBox.warning(self, "Error", "Selected path is not a valid folder")
            return

        self.model_combo.setEnabled(False)
        self.path_input.setEnabled(False)

        self.start_btn.setEnabled(False)
        self.pause_btn.setEnabled(True)
        self.stop_btn.setEnabled(True)

        model_size = self.model_combo.currentText()
        self.worker_thread = TranscriptionWorker(output_path, model_size)
        self.worker_thread.status_changed.connect(self.update_status)
        self.worker_thread.transcription_updated.connect(self.update_transcription)
        self.worker_thread.error_occurred.connect(self.handle_error)
        self.worker_thread.start()

        self.update_status(f"Starting transcription with {model_size} model...")

    def pause_transcription(self):
        if self.worker_thread:
            if self.worker_thread.is_paused:
                self.worker_thread.resume()
                self.pause_btn.setText("Pause")
            else:
                self.worker_thread.pause()
                self.pause_btn.setText("Resume")

    def stop_transcription(self):
        if self.worker_thread:
            self.worker_thread.stop()
            self.worker_thread.wait()
            self.worker_thread = None

            self.start_btn.setEnabled(True)
            self.pause_btn.setEnabled(False)
            self.pause_btn.setText("Pause")
            self.stop_btn.setEnabled(False)

            self.model_combo.setEnabled(True)
            self.path_input.setEnabled(True)

            self.update_status("Transcription stopped")

    def update_status(self, message: str):
        self.status_label.setText(message)
        logger.info(f"Status: {message}")

    def update_transcription(self, text: str):
        self.transcription_display.append(text)
        self.transcription_display.verticalScrollBar().setValue(
            self.transcription_display.verticalScrollBar().maximum()
        )

    def handle_error(self, error_message: str):
        logger.error(f"Error: {error_message}")
        self.update_status(f"{error_message}")
        QMessageBox.critical(self, "Error", error_message)

        if self.worker_thread and self.worker_thread.is_running:
            self.stop_transcription()

    def closeEvent(self, event):
        if self.worker_thread and self.worker_thread.is_running:
            reply = QMessageBox.question(
                self,
                "Confirm Exit",
                "Transcription is running. Are you sure you want to exit?",
                QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No
            )
            if reply == QMessageBox.StandardButton.Yes:
                self.worker_thread.stop()
                self.worker_thread.wait()
                event.accept()
            else:
                event.ignore()
        else:
            event.accept()


def main():
    app = QApplication(sys.argv)
    window = VoiceToTextApp()
    window.show()
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
