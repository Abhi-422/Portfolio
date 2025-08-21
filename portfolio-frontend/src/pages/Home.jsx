import { useState } from 'react';
import profileImg from '../assets/profile_pic.jpg';
import aboutMe from '../assets/aboutMe.jpg';
import resume from "../assets/Abhishek-Patange-Resume-422.pdf";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="hero" className='container'>
        <img src={profileImg} alt="Profile" />
        <h1>Abhishek Patange</h1>
        <p>Web Developer | ML Enthusiast</p>
        <button className="view-resume-btn" onClick={() => setIsModalOpen(true)}>
          View Resume
        </button>
      </section>

      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
            <iframe src={resume} title="Resume" style={{ width: '100%', height: '100%' }}></iframe>
          </div>
        </div>
      )}
      <br id='about'/>
      <section className="container about-section">
        <h2 className="head">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Full Stack developer and Machine Learning Enthusisat passionate about building impactful
              web applications and AI-powered solutions. With experience in the MERN stack,
              Python, and Machine Learning, I enjoy solving real-world problems with code.
            </p>
            <p>
              I’ve worked on projects involving face detection, data visualization, and
              full-stack development. My goal is to keep learning and contribute to
              meaningful tech innovations.
            </p>
          </div>
          <div className="about-image">
            <img src={aboutMe} alt="Abhishek Patange" />
          </div>
        </div>
      </section>
      <section className="container skills-section">
      <br id="sills" />
        <h2 className="head">Skills</h2>
        <ul>
          <li><b>Programming Language:</b>Python, JavaScript</li>
          <li><b>Web Development:</b>HTML, CSS, React, Node.js, Express</li>
          <li><b>Database</b>SQL, MongoDB</li>
          <li><b>Development Tools:</b>VS code,Git/GitHub, Postman</li>
        </ul>
      </section>
      <section className="container about-section">
      <br id="contact" />
        <h2 className="head">Contact</h2>
        <code>Work in Progress</code>
      </section>
    </>
  );
};

export default Home;
