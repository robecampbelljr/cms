'use client'
import { useState, useEffect } from 'react';

type AccordianFaqProps = {
  id: string;
  question: string;
  answer: string;
  state?: boolean;
};

const AccordianFaq: React.FC<AccordianFaqProps> =  ({id, question, answer, state}) => {

  let [expand, setExpand] = useState(state || false);

  useEffect(() => {
    if (`#${id}` === window.location.hash) {
      setExpand(true);
    }
  }, [id]);

  const toggleAccordion = () => {
    setExpand(!expand);
  };

  const createMarkup = () => ({__html: answer});

  return (
    <div key={id} id={id} className="accordian" onClick={() => {toggleAccordion()}}>
        <h3 className="carrot">{!expand ? ">" : "v"}</h3>
        <h3 className="question">{question}</h3>
      {expand ? <p dangerouslySetInnerHTML={createMarkup()}></p> : null}
    </div>
  )
}

export default AccordianFaq;