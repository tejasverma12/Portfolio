import React from "react";
import "./Projects.css";
import project1 from "../assets/Project1.jpg";
import project2 from "../assets/Project2.jpg";
import project3 from "../assets/Project3.jpg";

const Projects = () => {
  const projects = [
    { title: "Portfolio Website", img: project1 },
    { title: "E-commerce Website", img: project2 },
    { title: "Food Delivery App", img: project3 },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project, i) => (
          <div key={i} className="card">
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
