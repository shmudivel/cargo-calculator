import React from "react";
// import github from '../Assets/github.png'
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <p>Code: <a className="imgFooter" href="https://github.com/shmudivel/cargo-calculater.git" target="_blank" rel="noopener noreferrer"><FaGithub /></a></p>
      
    </div>
  );
};

export default Footer;
