import React from 'react';
import './style.css';
import house5Image from '../images/house5.jpg';
import house2Image from '../images/house2.jpg';
import house3Image from '../images/house3.jpg';
import house4Image from '../images/house4.jpg';

const Project = ({ title, image }) => {
    return (
        <div className="project">
          <div className="project-image-container">
            <img src={image} alt="House" className="project-image" />
          </div>
          <p className="project-title">{title}</p>
          
        </div>
      );
};

const ProjectSection = () => {
  const projects = [
    { title: 'Summer House', image: house5Image },
    { title: 'Brick House', image: house2Image },
    { title: 'Renovated', image: house3Image },
    { title: 'Barn House', image: house4Image },
    { title: 'Summer House', image: house5Image },
    { title: 'Brick House', image: house2Image },
    { title: 'Renovated', image: house3Image },
    { title: 'Barn House', image: house4Image },
  ];

  return (
    <div className="project-section" id='projects'>
      <h3 className="project-section-heading">Projects</h3>
      <hr className="divider" />
      <div className="project-grid"> 
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
