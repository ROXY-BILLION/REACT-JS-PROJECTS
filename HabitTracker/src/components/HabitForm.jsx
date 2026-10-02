function HabitForm({ onInputChange, taskInput, onAddTask }) {
  function handleSubmit(event){
    event.preventDefault();
    onAddTask(taskInput);
  }
  return (
    <section className="habit-form-section">
      <div className="container">
        <div className="habit-form-card">
          <div className="form-heading">
            <div className="form-icon">+</div>

            <div>
              <span>NEW HABIT</span>
              <h2>Create a habit</h2>
            </div>
          </div>

          <form className="habit-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="e.g. Read for 30 minutes"
              value={taskInput}
              onChange={onInputChange}
            />

            <button type="submit">
              Add Habit
              <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default HabitForm;