const Projects = ({ projectsArray }) => {
  return (
    <section id="projects" className="projects">
      <h1 className="section-title">Projects</h1>
      <div className="projects-container">{projectsArray}</div>
    </section>
  );
};

export default Projects;
