'use client'
import Instruments from './Instruments';
import { useState, useEffect } from 'react';

type ChildFormProps = {
  childNumber: string;
  allChildrenChecked: boolean;
  setAllChildrenChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChildForm: React.FC<ChildFormProps> = ({childNumber, allChildrenChecked, setAllChildrenChecked}) => {

  let [expYes, setExpYes] = useState(false);
  let [expNo, setExpNo] = useState(false);
  let [pianoState, setPianoState] = useState(false);
  let [saxState, setSaxState] = useState(false);
  let [voiceState, setVoiceState] = useState(false);

  useEffect(() => {
    if ((expYes || expNo) && (pianoState || saxState || voiceState)) {
      setAllChildrenChecked(true);
    } else if ((!expYes && !expNo) || ((!pianoState && !saxState && !voiceState))) {
      setAllChildrenChecked(false);
    }
  }, [expYes, expNo, setAllChildrenChecked, pianoState, saxState, voiceState, allChildrenChecked])

  const handelExpYes = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpYes(e.target.checked);
    if (expNo === true) {
      setExpNo(false);
    }
  }
  const handelExpNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpNo(e.target.checked);
    if (expYes === true) {
      setExpYes(false);
    }
  }

  return (
    <div className="child-form" key={childNumber}>
      <h2>{childNumber}</h2>
      <div className="child-inputs">
        <div className="child-input">
          <h3>*{childNumber} Name:</h3>
          <input name={`${childNumber}-name`} type="text" required></input>
        </div>
        <div className="child-input">
          <h3>*{childNumber} Age:</h3>
          <input name={`${childNumber}-age`} type="number" min={0} max={18} required></input>
        </div>
      </div>
      <Instruments pianoName={`${childNumber}-piano`} saxName={`${childNumber}-sax`} voiceName={`${childNumber}-voice`} pianoState={pianoState} saxState={saxState} voiceState={voiceState} setPianoState={setPianoState} setSaxState={setSaxState} setVoiceState={setVoiceState} />
      <div className="checkbox-section">
        <h5>*Prior Music Experience:</h5>
        <div className="checkbox-container">
          <h6>Yes</h6>
          <input name={`${childNumber}-music-exp-yes`} type="checkbox" checked={expYes} onChange={handelExpYes}></input>
        </div>
        <div className="checkbox-container">
          <h6>No</h6>
          <input name={`${childNumber}-music-exp-no`} type="checkbox" checked={expNo} onChange={handelExpNo}></input>
        </div>
      </div>
    </div>
  )
}

export default ChildForm;