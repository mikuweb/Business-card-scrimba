import { useState } from "react";
import { Button } from "./components/Button";
import { Contents } from "./components/Contents";
import { Links } from "./components/Links";
import "./style.css";

function App() {
  return (
    <div className="card">
      <img className="picture" src="./images/me_flower.JPG"></img>
      <div className="card__container">
        <h1 className="myname">Miku Kawata</h1>
        <p className="occupation">Frontend Developer</p>
        <div className="website__center">
          <a className="website" href="#">
            Miku.website
          </a>
        </div>
        <div className="btns">
          <Button variant="white" imgSrc="./images/Icon.png">
            Email
          </Button>
          <Button variant="blue" imgSrc="./images/Vector.png">
            LinkedIn
          </Button>
        </div>

        <Contents
          title="About"
          content="I am a frontend developer
      with a particular interest in making things simple 
      and automating daily tasks.
      I am always looking for new things to learn."
        />
        <Contents
          title="Interests"
          content="Love piano, traveling, reading, traveling, learning, flowers, cheese, making latte art, and dogs."
        />
      </div>
      <Links />
    </div>
  );
}

export default App;
