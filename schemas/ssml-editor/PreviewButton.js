import React, { Component } from 'react';
import Button from 'part:@sanity/components/buttons/default';
import { blocksToSSML } from './blocksToSSML';

// You should be careful with sharing this key
// I put it here to keep the code simple
const API_KEY = '<yourAPIkey>';
const GOOGLE_TEXT_TO_SPEECH_URL = `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${API_KEY}`;

const speak = async blocks => {
  // Serialize blocks to SSML
  const ssml = blocksToSSML(blocks);
  // Prepare the Google Text-to-Speech configuration
  const body = JSON.stringify({
    input: { ssml },
    // Select the language code and voice name (A-F)
    voice: { languageCode: 'en-US', name: 'en-US-Wavenet-A' },
    // Use MP3 in order to play in browser
    audioConfig: { audioEncoding: 'MP3' },
  });
  // Send the SSML string to the API
  const res = await fetch(GOOGLE_TEXT_TO_SPEECH_URL, {
    method: 'POST',
    body,
  }).then(result => result.json());
  // Play the returned audio with the Browser’s Audo API
  const audio = new Audio(`data:audio/wav;base64,${res.audioContent}`);
  audio.play();
};

export default function PreviewButton({ blocks }) {
  return (
    <Button style={{ marginTop: '1em' }} onClick={() => speak(blocks)}>
      Speak text
    </Button>
  );
}
