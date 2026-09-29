function ProjectCard({
  title,
  description,
  technology,
}) {
  return (
    <article className="project-card">
      <div className="project-number">
        PROJECT
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <span>{technology}</span>
    </article>
  );
}

export default ProjectCard;