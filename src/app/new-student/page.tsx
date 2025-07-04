'use client'
import Header from '../components/Header';
import Footer from '../components/Footer';
import banner from '../images/piano-banner.png';
import { useState, useEffect } from 'react';
import Instruments from '../components/Instruments';
import ChildForm from '../components/ChildForm';
import axios from 'axios';
import Link from 'next/link';

interface ChildData {
  name: FormDataEntryValue | null;
  age: FormDataEntryValue | null;
  lessons: {
    piano: boolean;
    sax: boolean;
    voice: boolean;
  };
  musicExperience: boolean;
}

export default function NewStudent() {

  let [clientName, setClientName] = useState('')
  let [selfCheck, setSelfCheck] = useState(false);
  let [childCheck, setChildCheck] = useState(false);
  let [numberChildren, setNumberChildren] = useState(0);
  let [hearAbout, setHearAbout] = useState('');
  let [location, setLocation] = useState('');
  let [questionsAndComments, setQuestionsAndComments] = useState('');
  let [monday, setMonday] = useState(false);
  let [tuesday, setTuesday] = useState(false);
  let [wednesday, setWednesday] = useState(false);
  let [thursday, setThursday] = useState(false);
  let [friday, setFriday] = useState(false);
  let [expYes, setExpYes] = useState(false);
  let [expNo, setExpNo] = useState(false);
  let [agreeStudioPolicies, setAgreeStudioPolicies] = useState(false);
  let [disableSubmit, setDisableSubmit] = useState(true);
  let [selfPianoCheck, setSelfPianoCheck] = useState(false);
  let [selfSaxCheck, setSelfSaxCheck] = useState(false);
  let [selfVoiceCheck, setSelfVoiceCheck] = useState(false);
  let [allChildrenChecked, setAllChildrenChecked] = useState(false);
  let [formUnderConstruction, setFormUnderConstruction] = useState(false);

  useEffect(() => {
    let experience = false;
    let selfInstruments = false;
    let studentSelected = (selfCheck || childCheck);
    let aDayIsSelected = (monday || tuesday || wednesday || thursday || friday);

    // Seeing if I need to check client music experience
    if (selfCheck && (expYes || expNo)) {
      experience = true;
    } else if (!selfCheck) {
      experience = true;
    }

    if (selfCheck) {
      if (selfPianoCheck || selfSaxCheck || selfVoiceCheck) {
        selfInstruments = true
      }
    } else if (!selfCheck) {
      selfInstruments = true;
    }

    if (!childCheck) {
      setAllChildrenChecked(true);
    }

    if (agreeStudioPolicies && studentSelected && aDayIsSelected && experience && selfInstruments && allChildrenChecked) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [disableSubmit, agreeStudioPolicies, selfCheck, childCheck, monday, tuesday, wednesday, thursday, friday, expYes, expNo, selfVoiceCheck, selfPianoCheck, selfSaxCheck, allChildrenChecked]);

  const handleSelfCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelfCheck(e.target.checked);
  }

  const handleChildCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChildCheck(e.target.checked);
  }

  const handelChildNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setNumberChildren(newValue);
  }

  const handelNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientName(e.target.value);
  }

  const handelHearAboutChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHearAbout(e.target.value);
  }

  const handelLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(e.target.value);
  }

  const handleQaAchange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestionsAndComments(e.target.value);
  }

  const handelMondayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonday(e.target.checked);
  }
  const handelTuesdayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTuesday(e.target.checked);
  }
  const handelWednesdayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWednesday(e.target.checked);
  }
  const handelThursdayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setThursday(e.target.checked);
  }
  const handelFridayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFriday(e.target.checked);
  }

  const handelSelfExpYes = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpYes(e.target.checked);
    if (expNo === true) {
      setExpNo(false);
    }
  }
  const handelSelfExpNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpNo(e.target.checked);
    if (expYes === true) {
      setExpYes(false);
    }
  }

  const handelAgreeSP = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreeStudioPolicies(e.target.checked)
  }

  let self = () => {
    if (selfCheck === true) {
      return (
        <div className="client">
          <h2>{clientName != "" ? clientName : "Self"}</h2>
          <Instruments pianoName={`self-piano`} saxName={`self-sax`} voiceName={`self-voice`} pianoState={selfPianoCheck} saxState={selfSaxCheck} voiceState={selfVoiceCheck} setPianoState={setSelfPianoCheck} setSaxState={setSelfSaxCheck} setVoiceState={setSelfVoiceCheck}/>
          <div className="checkbox-section">
            <h5>*Prior Music Instruction:</h5>
            <div className="checkbox-container">
              <h6>Yes</h6>
              <input name="self-music-exp-yes" type="checkbox" checked={expYes} onChange={handelSelfExpYes}></input>
            </div>
            <div className="checkbox-container">
              <h6>No</h6>
              <input name="self-music-exp-no" type="checkbox" checked={expNo} onChange={handelSelfExpNo}></input>
            </div>
          </div>
        </div>
      )
    }
  }

  let children = () => {
    if (childCheck === true) {
      return (
        <>
          <h4>How many children?</h4>
          <input name="child-number" type="number" onChange={handelChildNumberChange} min="0" max="12" style={{width: "10%"}}></input>
        </>
      )
    }
  }

  let childFormDisplay = () => {
    let childrenComponent = [];

    if (numberChildren > 0 && childCheck === true) {
      for (let i = 1; i <= numberChildren; i++) {
        childrenComponent.push(<ChildForm childNumber={`Child-${i}`} allChildrenChecked={allChildrenChecked} setAllChildrenChecked={setAllChildrenChecked} />)
      }
    }
    return childrenComponent;
  }

  let locationWarning = () => {

    if (location === 'In-Home-Kuna' || location === 'In-Home-Boise' || location === 'In-Home-Melba' || location === 'In-Home-Meridian' || location === 'In-Home-Nampa') {
      return (
        <div style={{marginTop:"15px"}}>*Currently <a href="/about-us#robert" target="_blank">Mr. Robert</a> is our only in-home teacher.</div>
      )
    } else {
      return null;
    }
  }

  let travelFeeWarning = () => {
    if (location === 'In-Home-Boise' || location === 'In-Home-Melba' || location === 'In-Home-Meridian' || location === 'In-Home-Nampa') {
      return <div style={{marginTop:"15px"}}>*There is a $25 per family, per month travel fee.</div>
    }
  }

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    document.body.style.cursor = 'progress';
    const formData = new FormData(e.target as HTMLFormElement);
     // Client information
    const clientName = formData.get('name');
    const clientPhone = formData.get('phone');
    const clientEmail = formData.get('email');
    const clientMusicExp = expYes;
    const clientPianoLessons = formData.get('self-piano') === 'on';
    const clientSaxLessons = formData.get('self-sax') === 'on';
    const clientVoiceLessons = formData.get('self-voice') === 'on';

    // Days available
    const monday = formData.get('mon') === 'on';
    const tuesday = formData.get('tue') === 'on';
    const wednesday = formData.get('wed') === 'on';
    const thursday = formData.get('thu') === 'on';
    const friday = formData.get('fri') === 'on';
    let daysAvailable = {
      mon: monday,
      tue: tuesday,
      wed: wednesday,
      thu: thursday,
      fri: friday
    };

    // Other fields
    const hearAbout = formData.get('hear-about');
    const location = formData.get('location');
    const questionsAndCommentsForm = formData.get('message');

    // Children data
    const childrenData: ChildData[] = [];
    if (childCheck && numberChildren > 0) {
      for (let i = 1; i <= numberChildren; i++) {
        const childName = formData.get(`Child-${i}-name`);
        const childAge = formData.get(`Child-${i}-age`);
        const childExpYes = formData.get(`Child-${i}-music-exp-yes`) === 'on';
        const childPiano = formData.get(`Child-${i}-piano`) === 'on';
        const childSax = formData.get(`Child-${i}-sax`) === 'on';
        const childVoice = formData.get(`Child-${i}-voice`) === 'on';

        childrenData.push({
          name: childName,
          age: childAge,
          lessons: {piano: childPiano, sax: childSax, voice: childVoice},
        } as ChildData);

        if (childExpYes) {
          childrenData[i-1].musicExperience = true;
        } else {
          childrenData[i-1].musicExperience = false;
        }
      }
  }

    let resultPackage = {
      clientName: clientName,
      clientEmail: clientEmail,
      clientPhone: clientPhone,
      clientWantsLessons: selfCheck,
      clientMusicExp: clientMusicExp,
      clientLessons: {piano: clientPianoLessons, sax: clientSaxLessons, voice: clientVoiceLessons},
      location: location,
      daysAvailable: daysAvailable,
      learnAboutUs: hearAbout,
      message: questionsAndComments,
      childrenLessons: [{}]
    };

    if (childCheck === true) {
      resultPackage.childrenLessons = childrenData;
    }

    try {
      const response = await axios.post('/store-new-student', resultPackage);
      document.body.style.cursor = 'default';
      window.location.href = '/thank-you';
    } catch (error) {
        alert(`We are sorry ${clientName}, there has been an error submitting your form. Please try again later.`);
    }
  }

  return (
    <div className="app">
      <Header image={banner} />
      <h1 id="title" className="lesson-header cursive flex-center">New Student Interest Form</h1>
      <div className="form-container">
        {formUnderConstruction ? <h1>Sorry! This form is still under construciton. Please contact us by email or phone below!</h1> : <form onSubmit={handelSubmit}>
        <h3>*Name:</h3>
        <input name="name" type="text" onChange={handelNameChange} required></input>
        <h3>*Phone</h3>
        <input name="phone" type="tel" required></input>
        <h3>*E-Mail</h3>
        <input name="email" type="email" required></input>
        <h3>*Who are you interested for?</h3>
        <div className="checkbox-section">
          <div className="checkbox-container">
            <h6>Self</h6>
            <input name="self" type="checkbox" checked={selfCheck} onChange={handleSelfCheck}></input>
          </div>
          <div className="checkbox-container">
            <h6>Child</h6>
            <input name="child" type="checkbox" checked={childCheck} onChange={handleChildCheck}></input>
          </div>
        </div>
        {children()}
        {self()}
        {childFormDisplay()}
        <h3>*Days Available:</h3>
          <div className="checkbox-section">
            <div className="checkbox-container">
              <h6>Monday</h6>
              <input name="mon" type="checkbox" checked={monday} onChange={handelMondayChange}></input>
            </div>
            <div className="checkbox-container">
              <h6>Tuesday</h6>
              <input name="tue" type="checkbox" checked={tuesday} onChange={handelTuesdayChange}></input>
            </div>
            <div className="checkbox-container">
              <h6>Wednesday</h6>
              <input name="wed" type="checkbox" checked={wednesday} onChange={handelWednesdayChange}></input>
            </div>
          </div>
          <div className="checkbox-section">
            <div className="checkbox-container">
              <h6>Thursday</h6>
              <input name="thu" type="checkbox" checked={thursday} onChange={handelThursdayChange}></input>
            </div>
            <div className="checkbox-container">
              <h6>Friday</h6>
              <input name="fri" type="checkbox" checked={friday} onChange={handelFridayChange}></input>
            </div>
          </div>
          <h3>How did you hear about us?</h3>
          <select name="hear-about" value={hearAbout} onChange={handelHearAboutChange}>
            <option value="">Select One</option>
            <option value="Dunkley Music">Dunkley Music</option>
            <option value="Empowering Parents">Empowering Parents</option>
            <option value="Facebook post">Facebook post</option>
            <option value="Friend/family">Friend/family</option>
            <option value="Home Ed 360">Home Ed 360</option>
            <option value="Internet search">Internet search</option>
          </select>
          <h3>*Preferred location:</h3>
          <select name="location" value={location} onChange={handelLocationChange} required>
            <option value="">Select One</option>
            <option value="In-Studio">In Studio (Kuna)</option>
            <option value="In-Home-Boise">In Home (Boise)</option>
            <option value="In-Home-Kuna">In Home (Kuna)</option>
            <option value="In-Home-Melba">In Home (Melba)</option>
            <option value="In-Home-Meridian">In Home (Meridian)</option>
            <option value="In-Home-Nampa">In Home (Nampa)</option>
          </select>
          {locationWarning()}
          {travelFeeWarning()}
          <h3>Questions or comments:</h3>
          <textarea name="message" onChange={handleQaAchange}></textarea>
          <div className="checkbox-section">
            <div className="checkbox-container">
              <input name="Agree To Studio Policies" type="checkbox" checked={agreeStudioPolicies} onChange={handelAgreeSP} />
              <h6>I have read and understand the <a href="/studio-policies" target="_blank">Studio Policies</a></h6>
            </div>
          </div>
          <button type="submit" disabled={disableSubmit}>Submit</button>
        </form>}
      </div>
      <Footer />
    </div>
  )
}