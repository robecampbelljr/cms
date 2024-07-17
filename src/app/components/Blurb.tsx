import Image from 'next/image';
import Link from 'next/link';
import pianoblurb from '../images/pianoblurb.png';
import saxblurb from '../images/saxophoneblurb.png';
import singblurb from '../images/singblurb.png';
import lessonblurb from '../images/lessonblurb.png';

type BlurbProps = {
  link: string;
  imgURL: string;
  text: string;
  altText: string;
}

const Blurb: React.FC<BlurbProps> =   ({link, imgURL, text, altText}) => {

  let image = pianoblurb;

  if (imgURL === 'lessonblurb') {
    image = lessonblurb;
  } else if (imgURL === 'pianoblurg') {
    image = pianoblurb
  } else if (imgURL === 'saxblurb') {
    image = saxblurb
  } else if (imgURL === 'singblurb') {
    image = singblurb
  }

  return (
    <Link href={link} passHref legacyBehavior>
      <div className="blurb">
        <Image src={image} alt={altText} className="blurbimage" width={0} height={0} />
        <h2>{text}</h2>
      </div>
    </Link>
  );
}

export default Blurb;