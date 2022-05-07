import React from "react";
import jmilogo from "../assets/jamialogo.png";
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import js from "../assets/js.jpg";
import nodejs from "../assets/nodejs.jpg";
import react from "../assets/reactjs.png";
import express from "../assets/expressjs.png";
import mongo from "../assets/mongodb.png";
import cpp from "../assets/cpp.jpg";
import c from "../assets/c.jpg";
import java from "../assets/java.jpg";
import python from "../assets/python.jpg";
import ieee from "../assets/ieee.jpg";
import aet from "../assets/aet.jpg";
import sparks from "../assets/sparks.ico";
import "../styles/About.css";

function Home() {
  return (
    <div className="about">
      <ul className="content">
        <span className="matter">
          <h1 className="aboutTitle">Education</h1>
          As, I have already intoduce about myself, but here I will tell little
          bit more about my education, skills, experiences etc. <br /> So, let
          me introduce my education. Currently I am pursuing Bachelor of
          Technology in Electrical Engineering at Jamia Millia Islamia, New
          Delhi. I have completed my higher secondary school form O P Jindal
          School Savitri Nagar, Tamnar, Raigarh, Chattisgarh, and senior
          secondary school from DAV Mukhyamantri Public School Raigarh,
          Chattisgarh.
        </span>
      </ul>
      <ul>
        <li className="card" id="edu">
          <div className="card__main" id="one">
            <div className="card__inner">
              <img src={jmilogo} alt="jmilogo" />
              <p className="card__name">
                B.Tech <span>at </span> <br /> Jamia Millia Islamia, Delhi
                (2020-2024)
              </p>
            </div>
          </div>
        </li>
      </ul>
      <ul className="content">
        <span className="matter">
          <h1 className="aboutTitle">Skills</h1>
          Skill is the undefined force to experience, intellect and passion in
          their operation. From the past few months I started learning techinal
          skills. Currently learning Backend Web Developement and Data Structure
          and Algorithms, also enhancing Frontend Developement skills. Whenever
          I learned a new skill, it boosts my confidence. Here I have listed my
          skills.
        </span>
      </ul>
      <ul className="content">
        <li className="card" id="skills">
          <div className="card__main" id="one">
            <div className="card__inner">
              <p className="card__name">
                Web Technologies
                <br />
                <h6>
                  <img src={html} alt="html" /> &nbsp;HTML <br />
                  <img src={css} alt="css" /> &nbsp; CSS <br />
                  <img src={js} alt="js" /> &nbsp; JavaScript <br />
                  <img src={nodejs} alt="html" /> &nbsp; Nodejs <br />
                  <img src={express} alt="express" /> &nbsp; Expressjs <br />
                  <img src={mongo} alt="mongo" /> &nbsp; Mongodb <br />
                  <img src={react} alt="react" /> &nbsp; React
                </h6>
              </p>
            </div>
          </div>
        </li>
        <li className="card" id="skills">
          <div className="card__main" id="one">
            <div className="card__inner">
              <p className="card__name">
                Programming Languages
                <br />
                <h6>
                  <img src={cpp} alt="cpp" /> &nbsp; C++ <br />{" "}
                  <img src={c} alt="c" /> &nbsp; C <br />{" "}
                  <img src={java} alt="java" /> &nbsp; Java <br />{" "}
                  <img src={python} alt="python" /> &nbsp; Python
                </h6>
              </p>
            </div>
          </div>
        </li>
      </ul>

      <ul className="content">
        <span className="matter">
          Based on these skills I have created many projects. &nbsp;
          <a
            target="_blank"
            href="https://github.com/fizaayesha"
            rel="noreferrer"
          >
            Click Here
          </a>
          &nbsp; to glance at my github profile. And to know more about my
          skills and projects just go through my &nbsp;
          <a
            target="_blank"
            href="https://ayeshakhan.netlify.app/"
            rel="noreferrer"
          >
            Portfolio
          </a>
          &nbsp; Website.
        </span>
        <span className="matter">
          <h1 className="aboutTitle">Experience</h1>I am web developement team
          member at IEEE Computer Society JMI-Student Chapter. IEEE CS is the
          leading source of information, inspiration and collaboration in
          computer science and engineering. Also web developement volunteer at
          Aaghaaz e Taleem. Aaghaaz e Taleem (AeT) is a NPO (not for profit
          organization) which began in 2017 by the students of Jamia Millia
          Islamia.
        </span>
      </ul>
      <ul>
        <li className="card" id="pos">
          <div className="card__main" id="one">
            <div className="card__inner">
              <img src={sparks} alt="ieee" />
              <p className="card__name">
                Web Developement and Designing Intern <span>at </span> The Sparks
                Foundation 
              </p>
              <span>April-May (2 months)</span>
            </div>
          </div>
        </li>
        <li className="card" id="pos">
          <div className="card__main" id="one">
            <div className="card__inner">
              <img src={ieee} alt="ieee" />
              <p className="card__name">
                Web Developer <span>at </span>IEEE CS JMI - Student Chapter
              </p>
            </div>
          </div>
        </li>
        <li className="card" id="pos">
          <div className="card__main" id="one">
            <div className="card__inner">
              <img src={aet} alt="aet" />
              <p className="card__name">
                Web Developer <span>at </span>Aaaghaaz e <br /> Taleem
              </p>
            </div>
          </div>
        </li>
      </ul>
      <ul className="content"></ul>
      <ul className="content">
        <span className="matter">
          <h1 className="aboutTitle">Hobbies</h1>
          To be really happy and really safe, one ought to have at least two or
          three hobbies, and they must all be real. So, in my spire time, I
          enjoy watching motivational video clips. Also my Hobby includes
          designing websites. <br /> Hobby is a particular and most interesting
          habit than other habit of any person.
        </span>
      </ul>
    </div>
  );
}

export default Home;
