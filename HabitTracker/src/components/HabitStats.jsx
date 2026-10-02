function HabitStats({totalHabits,activeHabits,completedHabits,clearHabits}) {
  return (
    <section className="stats-section" id="stats">
      <div className="container">
        <div className="section-label">
          <span>OVERVIEW</span>
          <h2>Your progress</h2>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-top">
              <span>Total Habits</span>
              <span className="stat-icon">◎</span>
            </div>

            <strong>{totalHabits}</strong>
            <p>Habits you're tracking</p>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span>Active</span>
              <span className="stat-icon">◌</span>
            </div>

            <strong>{activeHabits}</strong>
            <p>Still in progress</p>
          </div>

          <div className="stat-card completed-stat">
            <div className="stat-top">
              <span>Completed</span>
              <span className="stat-icon">✓</span>
            </div>

            <strong>{completedHabits}</strong>
            <p>Completed today</p>
          </div>
          {completedHabits > 0 && (
            <button type="button" className="clear-button" onClick={clearHabits}>
              Clear Completed
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default HabitStats;