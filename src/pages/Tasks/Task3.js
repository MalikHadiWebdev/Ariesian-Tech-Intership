import React from "react";
import "./Task3.css";
import { ReactTyped } from "react-typed";
import profile from "../../assets/images/Profile.jpg";
import { Button } from "react-bootstrap";

const Task3 = () => {
  const projects = [
    {
      id: 1,
      name: "Responsive Portfolio",
      path: `1.png`,
      link: "https://tsxmurshad.github.io/portfolio1/",
    },
    {
      id: 2,
      name: "Profile Card",
      path: `2.png`,
      link: "https://tsxmurshad.github.io/ProfileCard/",
    },
    {
      id: 3,
      name: "Age Calculator",
      path: `3.png`,
      link: "https://tsxmurshad.github.io/AgeCalculator/",
    },
    {
      id: 4,
      name: "E-commerce",
      path: `4.png`,
      link: "https://tsxmurshad.github.io/cara/",
    },
    {
      id: 5,
      name: "Tic-Tac-Toe",
      path: `5.png`,
      link: "https://tsxmurshad.github.io/TicTacToe/",
    },
    {
      id: 6,
      name: "Rock Paper Scissors",
      path: `6.png`,
      link: "https://tsxmurshad.github.io/RockPaperScissor/",
    },
  ];

  const cardInfo = [
    {
      id: 1,
      title: "MERN Stack",
      para: "Developing dynamic web applications using MongoDB, Express.js, React, and Node.js for high-performance solutions.",
      src: "MERN-Stack.webp",
    },
    {
      id: 2,
      title: "Graphic Design",
      para: "Creating visually compelling designs in Photoshop, from branding to marketing materials, to effectively communicate your message",
      src: "photoshop.jpg",
    },
    {
      id: 3,
      title: "Video Editing",
      para: "Transforming raw footage into captivating videos with professional editing, motion graphics, and sound design",
      src: "Adobe-AfterEffects.jpg",
    },
    {
      id: 4,
      title: "Machine Learning",
      para: "Building intelligent systems using advanced machine learning techniques for data-driven insights and automation.",
      src: "MachinLearning.jpg",
    },
    {
      id: 5,
      title: "Python",
      para: "Providing versatile Python solutions for web development, data analysis, and automation tailored to your needs.",
      src: "python.webp",
    },
    {
      id: 6,
      title: "C++",
      para: "Developing high-performance applications with C++ for software, game development, and real-time simulations.",
      src: "CPP.png",
    },
  ];

  return (
    <div className="d-flex flex-column align-items-center ">
      <article
        id="home"
        className="container d-flex justify-content-evenly align-items-center"
      >
        <div className="align-items-start m-5 w-75 text">
          <h1 className="text-light-emphasis">
            Hi,
            <br />
            I'm <strong className="text-lighter">Malik Hadi</strong>
          </h1>
          <h3 className="text-lighter">
            <ReactTyped
              strings={[
                "MERN Stack Developer",
                "Graphic Designer",
                "Video Editor",
              ]}
              typeSpeed={70}
              backSpeed={50}
              loop
            />
          </h3>
          <p>
            I'm a passionate and dedicated B.Sc. Computer Science student with
            half my degree completed, I'm a versatile developer skilled in MERN
            stack development, graphic design, and video editing. I'm passionate
            about crafting innovative digital solutions and bringing creative
            ideas to life. Let's collaborate and build exceptional projects
            together!
          </p>
          <a href="#about">
            <Button className="bg-hover" variant="outline-dark">
              Know more
            </Button>
          </a>
        </div>
        <img src={profile} alt="profile" loading="lazy" />
      </article>
      <article
        id="about"
        className="container d-flex justify-content-evenly align-items-center"
      >
        <div className="align-items-start m-5 text">
          <h1 className="text-light-emphasis">
            <strong>About Me</strong>
          </h1>
          <p>
            I am{" "}
            <strong className="text-lighter">
              <strong>Malik Hadi</strong>
            </strong>
            , a dedicated and results-driven individual with a strong background
            in <span>computer science</span>. I have honed my skills in software
            development, particularly in
            <span>web technologies</span>, and have hands-on experience working
            with the{" "}
            <span>
              <strong>MERN stack</strong>
            </span>
            . My educational journey has equipped me with a solid foundation in
            programming, algorithms, and data structures. I have also been
            involved in various projects that demonstrate my ability to apply
            theoretical knowledge to practical problems. In addition to my
            technical expertise, I possess strong
            <span>graphic designing</span> skills, enabling me to create
            visually appealing and user-friendly interfaces. I am passionate
            about continuous learning and am always eager to take on new
            challenges to further enhance my skills and contribute to innovative
            projects.
          </p>
          <a href="https://drive.google.com/file/d/1JIHwUQBfRI9b95ImGjgxGrIKC2p43xU1/view">
            <Button className="bg-hover" variant="outline-dark">
              Download CV
            </Button>
          </a>
        </div>
      </article>
      <article id="services" className="container">
        <h1 className="text-light-emphasis">
          <strong>Services</strong>
        </h1>
        <section id="services_container">
          {cardInfo.map((card) => (
            <div className="myCard" key={card.id}>
              <div className="innerCard">
                <div className="frontSide">
                  <h2 className="title">{card.title}</h2>
                  <p>hover me</p>
                </div>
                <div className="backSide">
                  <div className="card_image">
                    <img
                      src={`/assets/images/portfolio/${card.src}`}
                      alt={card.title}
                    />
                  </div>
                  <h2 className="title">{card.title}</h2>
                  <p>{card.para}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </article>
      <article id="portfolio">
        <h1>Portfolio Gallery</h1>
        <section id="portfolio_container">
          {projects.map((project) => (
            <a href={project.link} key={project.id}>
              <div className="galleryItem">
                <img
                  className="galleryImage"
                  src={`/assets/images/portfolio/projects/Project${project.path}`}
                  alt={`Project${project.id}`}
                />
                <h3 className="name">{project.name}</h3>
              </div>
            </a>
          ))}
        </section>
      </article>
      <article id="contact">
        <div className="form_card1">
          <div className="form_card2">
            <form className="form">
              <p className="form_heading">Contact Us</p>

              <div className="form_field">
                <input
                  id="formName"
                  required=""
                  placeholder="Name"
                  className="input_field"
                  type="text"
                />
              </div>

              <div className="form_field">
                <input
                  id="formEmail"
                  required=""
                  placeholder="Email"
                  className="input_field"
                  type="email"
                />
              </div>

              <div className="form_field">
                <input
                  id="formSubject"
                  required=""
                  placeholder="Subject"
                  className="input_field"
                  type="text"
                />
              </div>

              <div className="form_field">
                <textarea
                  id="formMessage"
                  required=""
                  placeholder="Message"
                  cols="30"
                  rows="3"
                  className="input_field"
                ></textarea>
              </div>
              <button type="submit" className="sendMessage_btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Task3;
