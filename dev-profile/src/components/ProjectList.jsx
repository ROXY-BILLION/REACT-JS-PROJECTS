import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-heading">
          <span>SELECTED WORK</span>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technology={project.technology}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectList;