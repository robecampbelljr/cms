'use client'
import { useState } from 'react';

type InstrumentProps = {
  pianoName: string;
  saxName: string;
  voiceName: string;
  pianoState: boolean;
  saxState: boolean;
  voiceState: boolean;
  setPianoState: React.Dispatch<React.SetStateAction<boolean>>;
  setSaxState: React.Dispatch<React.SetStateAction<boolean>>;
  setVoiceState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Instruments: React.FC<InstrumentProps> = ({pianoName, saxName, voiceName, pianoState, saxState, voiceState, setPianoState, setSaxState, setVoiceState}) => {

  const handlePianoState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPianoState(e.target.checked);
  }

  const handleSaxState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSaxState(e.target.checked);
  }

  const handleVoiceState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVoiceState(e.target.checked);
  }

  return (
    <div className="checkbox-section">
      <h5>*Instrument(s):</h5>
      <div className="checkbox-container">
        <h6>Piano</h6>
        <input name={pianoName} type="checkbox" checked={pianoState} onChange={handlePianoState}></input>
      </div>
      <div className="checkbox-container">
        <h6>Saxophone</h6>
        <input name={saxName} type="checkbox" checked={saxState} onChange={handleSaxState}></input>
      </div>
      <div className="checkbox-container">
        <h6>Voice</h6>
        <input name={voiceName} type="checkbox" checked={voiceState} onChange={handleVoiceState}></input>
      </div>
    </div>
  )
}

export default Instruments;