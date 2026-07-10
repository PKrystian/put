#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

if [ -f ~/.zprofile ]; then
    source ~/.zprofile
fi

pip3 install -r requirements.txt > /dev/null 2>&1

python3 voice_to_text_app.py

if [ $? -ne 0 ]; then
    osascript -e 'display dialog "Failed to start Voice-to-Text app. Please check the terminal for errors." buttons {"OK"} default button 1'
    exit 1
fi

