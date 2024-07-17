import Image, { StaticImageData } from 'next/image';
import saxophone from '../images/saxophoneblurb.png';
import piano from '../images/pianoblurb.png';
import voice from '../images/singblurb.png';

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type BlurbSectionProps = {
  flexDir: FlexDirection;
  imageSrc: string;
  background: string;
  title: string;
  list: string[];
  id: string;
}

const BlurbSection: React.FC<BlurbSectionProps> = ({flexDir, imageSrc, background, title, list, id}) => {
  let imageSRC = piano;

  if (imageSrc === 'piano') {
    imageSRC = piano;
  } else if (imageSrc === 'saxophone') {
    imageSRC = saxophone;
  } else if (imageSrc === 'voice') {
    imageSRC = voice;
  }

  return (
    <section style={{backgroundColor: background, flexDirection: flexDir}} className="blurb-component" id={id}>
      <Image className="blurb-component-image" src={imageSRC} width={100} height={100} alt="Image Here"/>
      {list ? <section className="list">
          <u><h2 className="cursive">{title}</h2></u>
          <ul>
            {list.map((item, index) => {
              return (<li key={index}>{item}</li>)
            })}
          </ul>
        </section> : null
      }
    </section>
  )
}

export default BlurbSection;