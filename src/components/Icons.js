import React from "react";
import insta from "../assets/insta.jpg";
import linked from "../assets/linked.png";
import github from "../assets/github.jpg";
import "../styles/Footer.css";

function Icons() {
  return (
    <div className="side">
      <a href="http://instagram.com/ayesha__19__">
        <img src={insta} alt="Ayesha" />
      </a>
      <a href="https://www.linkedin.com/in/ayesha-khan-129434219">
        <img src={linked} alt="Ayesha" />
      </a>
      <a href="https://github.com/fizaayesha">
        <img src={github} alt="Ayesha" />
      </a>
    </div>
  );
}

export default Icons;
