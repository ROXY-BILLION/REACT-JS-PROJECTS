function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-badge">
          <span></span>
          DAILY HABIT TRACKER
        </div>

        <h1>
          Small habits.
          <br />
          <span>Big progress.</span>
        </h1>

        <p>
          Build consistency, track your daily progress,
          and turn simple actions into lasting habits.
        </p>

        <div className="hero-meta">
          <div>
            <strong>01</strong>
            <span>Start small</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Stay consistent</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Keep growing</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;