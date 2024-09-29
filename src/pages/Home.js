import React from "react";
import { Button } from "react-bootstrap";
import { ReactTyped } from "react-typed";
import cv from "../assets/images/Malik_Hadi_Zulfiqar_React.js_1YearExp.pdf";

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center container">
      <div className="align-items-start m-5 w-75 text">
        <h1 className="text-light-emphasis">
          Hi,
          <br /> I'm <strong className="text-lighter">Malik Hadi</strong>
        </h1>
        <h3 className="text-lighter">
          <ReactTyped
            strings={[
              "MERN Stack Developer",
              "Graphic Designer",
              "Video Editor",
            //   "Freelancer",
            //   "Photographer",
            //   "Web Designer",
            //   "Web Developer",
            //   "UI/UX Designer",
              
            ]}
            typeSpeed={70}
            backSpeed={50}
            loop
          />
        </h3>
        <p className="text-light-emphasis">
          As a dedicated <strong>MERN Stack Developer</strong> with a strong
          foundation in <em>React</em>, I'm passionate about crafting intuitive
          and visually appealing web applications. My expertise extends beyond
          coding, as I'm also a skilled graphic designer and video editor. Let's
          collaborate to bring your digital vision to life.
        </p>
        <a
          href={cv}
          target="_blank"
          rel="noreferrer"
          download={"Malik_Hadi_Zulfiqar_React.js_1YearExp.pdf"}
        >
          <Button className="bg-hover" variant="outline-dark">
            Download CV
          </Button>
        </a>{" "}
      </div>
    </div>
  );
};

export default Home;
