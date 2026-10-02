function TaskStats({totalTasks,activeCount,completedCount,onClearCompleted}) {
  return (
    <section className="stats-section" id="stats">
      <div className="container">
        <div className="stats-grid">

          <div className="stat-card">
            <span>Total</span>
            <strong>{totalTasks}</strong>
          </div>

          <div className="stat-card">
            <span>Active</span>
            <strong>{activeCount}</strong>
          </div>

          <div className="stat-card">
            <span>Completed</span>
            <strong>{completedCount}</strong>
          </div>

          {completedCount > 0 && (
            <div className="clear-completed">
              <button
                type="button"
                onClick={onClearCompleted}
              >
                Clear Completed
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default TaskStats;