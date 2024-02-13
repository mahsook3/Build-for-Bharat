import requests
import json

# Transcribe speech using Bhashini ASR API
asr_api_url = 'https://bhashini.com/api/asr'
asr_params = {
    'language': 'hi-IN'
}

with open('audio.wav', 'rb') as f:
    audio_data = f.read()

response = requests.post(asr_api_url, data=audio_data, params=asr_params)

data = None
try:
    data = response.json()
except json.JSONDecodeError as e:
    print('ASR API Error', e)

if data and 'transcript' in data:
    text = data['transcript']

    # Translate text using Bhashini Translate API
    translate_api_url = 'https://bhashini.com/api/translate'
    translate_params = {
        'source': 'hi',
        'target': 'en',
        'text': text
    }

    response = requests.post(translate_api_url, data=json.dumps(translate_params))

    data = None
    try:
        data = response.json()
    except json.JSONDecodeError as e:
        print('Translate API Error', e)

    if data and 'translatedText' in data:
        translated_text = data['translatedText']
        print(translated_text)
else:
    print('No transcript data received from ASR API')