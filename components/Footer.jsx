import React from 'react';
import { AiOutlineGithub, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return(
    <div className="footer-container">
      <p>2022 Strxangxl. All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineGithub />
      </p>
    </div>
  )
};

export default Footer;