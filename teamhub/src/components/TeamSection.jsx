import TeamMemberCard from "./TeamMemberCard";

function TeamSection({members}) {
    return (
    <section className="member-section" id="members">
      <div className="container">
        <div className="section-heading">
          <h2>Team Members</h2>
        </div>

        <div className="skills-grid">
        {members.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              department={member.department}
              bio={member.bio}
              skills={member.skills}
              availability={member.availability}
            />
          ))}
        </div>
      </div>
    </section>
    )
}
export default TeamSection;