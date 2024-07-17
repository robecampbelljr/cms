import Header from "../components/Header";
import Footer from "../components/Footer";
import banner from '../images/lessonbanner.png';
import BlurbSection from "../components/BlurbSection";
import CallToAction from "../components/CallToAction";
import { lessonList, pianoList, saxophoneList, voiceList } from '../component-content/lesson-info';

const lesson = () => {

  let saxophone = '/src/app/images/saxophoneblurb.png';
  let piano = '/src/app/images/pianoblurb.png';
  let voice = '/src/app/images/singblurb.png';

  return(
    <div className="app">
      <Header image={banner} />
      <div style={{flexDirection: 'column'}} className="flex-center">
        <h1 className="lesson-header cursive"><u>Lesson Information:</u></h1>
        <ul>
          {lessonList.map((bullet, index) => {
            return (
              <li key={`${bullet}-${index}`}>{bullet}</li>
            )
          })}
        </ul>
      </div>
      <BlurbSection id={"piano"} flexDir={'row'} imageSrc={'piano'} background={'rgba(250, 246, 27, 0.216)'} title={"Piano Lessons"} list={pianoList}/>
      <BlurbSection id={"sax"} flexDir={'row-reverse'} imageSrc={'saxophone'} background={'none'} title={"Saxophone Lessons"} list={saxophoneList} />
      <BlurbSection id={"voice"} flexDir={'row'} imageSrc={'voice'} background={'rgba(250, 246, 27, 0.216)'} title={"Voice Lessons"} list={voiceList}/>
      <CallToAction background={'none'} />
      <Footer />
    </div>
  );
}

export default lesson;