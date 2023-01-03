import React from "react";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        <a
          className="imgFooter"
          href="https://github.com/shmudivel/cargo-calculater.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={40} />
        </a>
        <a
          className="imgFooter"
          href="https://www.linkedin.com/in/darkhan-iglikov-24a616157"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40} />
        </a>
        <a
          className="imgFooter"
          href="https://twitter.com/_Darkhand_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare size={40} />
        </a>
      </p>
    </div>
  );
};

export default Footer;
