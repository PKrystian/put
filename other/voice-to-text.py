import sounddevice as sd
import numpy as np
import whisper
import queue
import threading
import time
import os
import sys
from datetime import datetime, timedelta

if len(sys.argv) < 2:
    print("Usage: python3 transcription.py \"/path/to/folder\"")
    sys.exit(1)

output_dir = sys.argv[1]

if not os.path.isdir(output_dir):
    print(f"Error: {output_dir} is not a folder")
    sys.exit(1)

date_str = datetime.now().strftime("%Y-%m-%d")
filename = f"{date_str}-transcription.md"
filepath = os.path.join(output_dir, filename)

print(f"📂 Transcription file: {filepath}")

model = whisper.load_model("medium")

audio_queue = queue.Queue()

samplerate = 16000
blocksize = 4000
buffer_seconds = 20


def format_timestamp(seconds):
    return str(timedelta(seconds=int(seconds)))


def audio_callback(indata, frames, time_, status):
    if status:
        print("Audio status:", status)
    audio_queue.put(indata.copy())


def transcribe_loop():
    buffer = np.zeros((0, 1))
    start_time = time.time()
    last_section_time = start_time

    while True:
        block = audio_queue.get()
        buffer = np.concatenate((buffer, block))

        if buffer.shape[0] >= samplerate * buffer_seconds:
            audio = buffer.flatten().astype(np.float32)
            elapsed = int(time.time() - start_time)
            timestamp = format_timestamp(elapsed)

            try:
                result = model.transcribe(audio, fp16=False, language="pl")
                text = result["text"].strip()
                if text:
                    md_text = f"### [{timestamp}]\n{text}\n"
                    if (elapsed // 600) > ((last_section_time - start_time) // 600):
                        md_text = "\n---\n" + md_text
                        last_section_time = time.time()

                    print(">>", text)
                    with open(filepath, "a", encoding="utf-8") as f:
                        f.write(md_text)
            except Exception as e:
                print("Transcription error:", e)

            buffer = np.zeros((0, 1))


threading.Thread(target=transcribe_loop, daemon=True).start()

with sd.InputStream(callback=audio_callback, channels=1, samplerate=samplerate, blocksize=blocksize):
    print("🎙️ Listening to lecture... (CTRL+C to stop)")
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\nTranscription stopped")
