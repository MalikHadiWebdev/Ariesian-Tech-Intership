import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="align-items-start m-5 container text text-light-emphasis w-75">
        <h1 className="text-center">
          <strong>About Me</strong>
        </h1>
        <p className="text-center">
          I'm <strong className="text-lighter">Malik Hadi</strong>, a dedicated
          MERN Stack Developer with a strong passion for creating innovative web
          applications. My journey in the world of web development began with a
          fascination for the intersection of design and technology. I've honed
          my skills in React, building dynamic and responsive user interfaces.
          Beyond coding, I'm also a proficient graphic designer and video
          editor, allowing me to approach web development with a holistic
          perspective. With a focus on delivering high-quality solutions, I'm
          committed to staying up-to-date with the latest industry trends and
          technologies. I'm excited to collaborate with like-minded individuals
          and contribute to projects that make a positive impact.
        </p>
        <ul className="ul-about list-unstyled">
          <h3>
            <strong>Skills</strong>
          </h3>
          <div className="row mb-3">
            <div className="col-6">
              <li>
                <strong>Programming Languages:</strong>
                <ul className="mx-3">
                  <li>Python</li>
                  <li>C++</li>
                  <li>JavaScript</li>
                </ul>
              </li>
            </div>
            <div className="col-6">
              <li>
                <strong>Artificial Intelligence:</strong>
                <ul className="mx-3">
                  <li>Artificial Intelligence</li>
                  <li>Machine Learning</li>
                </ul>
              </li>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <li>
                <strong>Frameworks / Libraries:</strong>
                <ul className="mx-3">
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Material UI</li>
                  <li>Bootstrap</li>
                </ul>
              </li>
            </div>
            <div className="col-6">
              <li>
                <strong>Front-End Development:</strong>
                <ul className="mx-3">
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </li>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <li>
                <strong>Graphic Design / Video Editing:</strong>
                <ul className="mx-3">
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>CoralDraw</li>
                  <li>Adobe After Effects</li>
                  <li>Adobe Premiere Pro</li>
                  <li>Filmora 13</li>
                </ul>
              </li>
            </div>
            <div className="col-6">
              <li>
                <strong>Databases:</strong>
                <ul className="mx-3">
                  <li>MySQL</li>
                  <li>MongoDB</li>
                </ul>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;
