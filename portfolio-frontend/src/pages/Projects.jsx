import { useState } from 'react';
// import './Projects.css';

const projects = [
  
  {
    title: 'MERN Stack Chat Application',
    techstack: 'MERN stack, Tailwind CSS, Socket.IO',
    features: [
      'Full-stack real-time chat app.',
      'Beautiful UI with Tailwind CSS.',
      'JWT-based authentication.',
      'Socket.IO for live messaging.',
    ],
    link: 'https://mern-chat-422.netlify.app',
    preview: '/previews/chat-app.gif',
  },
  {
    title: 'House Price Prediction',
    techstack: 'Python, Scikit-learn, Pandas, Matplotlib',
    features: [
      'Developed a regression model to predict house prices using key housing features.',
      'Applied feature engineering and trained models like Linear Regression and Random Forest',
    ],
    link: '',
    preview: '/previews/face-analysis.gif',
  },
  {
    title: 'AI - Face analysis System',
    techstack: 'Python, OpenCV, Flask, Streamlit, DeepFace',
    features: [
      'Real-time face analysis system using Python and OpenCV.',
      'Includes face recognition, emotion, age & gender detection.',
      'Streamlit UI for live camera and image uploads.',
    ],
    link: '',
    preview: '/previews/face-analysis.gif',
  },
];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
    <div className="popup" id='propop'>click to see the preview</div>
      <section id="projects" className="project-section container">
        <h2 className="head">Projects</h2>
        <div className="project-wrapper">
          <div className="project-list">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project"
                onClick={() => {
                  setIsModalOpen(true)
                  setSelectedProject(index)
                }
                }
              >
                <h3>{project.title}</h3>
                <p><b>Tech Stack:</b> {project.techstack}</p>
                <ul>
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Website
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
          {isModalOpen?
      <div className='modal' onClick={() => {
        setIsModalOpen(false)
        setSelectedProject(null)
        }}>
        {selectedProject !== null && projects[selectedProject].preview && (
          <div className="preview-pane modal-content">
            Previews are comming Soon
            <img
              src={projects[selectedProject].preview}
              alt="Project Preview"
              className="preview-gif"
            />
          </div>
        )}
      </div>
      :""}
    </>
  );
};

export default Projects;
