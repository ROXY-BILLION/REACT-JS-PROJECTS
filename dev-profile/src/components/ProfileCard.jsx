function ProfileCard({ name, role, bio }) {
  return (
    <section className="profile-section" id="profile">
      <div className="container">
        <div className="profile-card">
          <div className="profile-image">
            DG
          </div>

          <div className="profile-content">
            <span className="profile-label">
              {role}
            </span>

            <h2>{name}</h2>

            <p>{bio}</p>

            <div className="profile-links">
              <a href="#projects">View Projects</a>
              <a href="#contact">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;