function TeamMemberCard({name,role,department,bio,skills,availability}) {
  return (
    <article className="project-card">
      <div className="project-number">
      </div>
            
        <h3>{name}</h3>
        <p>{role}</p>
        <p>{department}</p>
        <p>{bio}</p>
        <p>{skills}</p>
        <p>{availability}</p>
    </article>
  );
}
export default TeamMemberCard;