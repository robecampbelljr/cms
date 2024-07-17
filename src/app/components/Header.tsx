'use client'
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import Burger from './Burger';
import Link from 'next/link';

type HearderProps = {
  image: StaticImageData;
}

const Header: React.FC<HearderProps> = ({image}) => {

  let [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {isOpen && <Burger/>}
      <span className="burger" onClick={() => { setIsOpen(!isOpen) }} style={{color: isOpen ? 'black' : 'white'}}>
        <p>__</p>
        <p>__</p>
        <p>__</p>
      </span>
      <section className="banner">
        <Image className="image" src={image} height={0} width={0} alt="Banner Pic"></Image>
        <Link href="/" passHref legacyBehavior><h1 className="pointer">Campbell Music Studio</h1></Link>
      </section>
    </header>
  )
}

export default Header;