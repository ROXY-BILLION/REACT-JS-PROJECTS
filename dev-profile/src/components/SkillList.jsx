import Skill from "./Skill";

function SkillList({ skills }) {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-heading">
          <span>WHAT I USE</span>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <Skill
              key={skill}
              name={skill}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillList;