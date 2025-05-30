import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-list">
        <div className="project-card">
          <h3>Blood Bank Management</h3>
          <p>A frontend web app for managing donor registration and blood requests.</p>
          <a href="https://github.com/latikapatil-28/blood-bank-management.git" target="_blank">GitHub</a>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Personal portfolio built using React and CSS.</p>
          <a href="https://github.com/latikapatil-28/personal-portfolio.git" target="_blank">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
