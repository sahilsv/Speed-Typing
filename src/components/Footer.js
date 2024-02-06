import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="d-flex justify-content-center mt-5 pt-5">
        <h3>
          Made with <span>React</span>
        </h3>
      </div>

      <div className="mt-1 d-flex justify-content-center">
        <a
          href="https://www.linkedin.com/in/sahil-singh-virdhi-520795191/"
          target="_blank"
        >
          <FaLinkedin size={30} className="mx-2" />
        </a>
        <a href="https://github.com/sahilsv" target="_blank">
          <FaGithubSquare size={30} className="mx-2" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
