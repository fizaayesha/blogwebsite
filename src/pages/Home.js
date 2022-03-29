import React from "react";
import Ayesha from "../assets/homeimage.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <ul className="contents">
        Welcome to my personal website, this website depits all of the work that
        I have completed yet. It demostrates my improvement, growth and skills
        that I have build. My interest in the field of technololgy stimulate a
        passion for learning. That's why I am excited to continue developing my
        skills and gaining valuable experiences.
      </ul>
      <ul>
        <li className="cards">
          <div className="card__mainss" id="one">
            <img src={Ayesha} alt="Ayesha" />
          </div>
        </li>
        <li className="cards" id="card2">
          <div className="card__mains" id="one">
            <div className="card__inners">
              <p className="card__names">
                <span> Hello, my name is</span> <br />
                AYESHA KHAN <br />{" "}
                <span>
                  And, I'm a <br />
                </span>
                Web Developer
              </p>
            </div>
          </div>
        </li>
      </ul>

      <ul className="contents" id="contents2">
        <li id="card2">
          As a Web Developer I love creating beautiful and accessible web
          interfaces. Have a look at whole website to know more about me.
        </li>
      </ul>
    </div>
  );
}

export default Home;
