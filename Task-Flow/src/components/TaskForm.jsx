function TaskForm({ onAddTask, taskInput, onInputChange }) {
  function handleSubmit(event) {
    event.preventDefault();
    onAddTask(taskInput)
  }
  return (
    <section className="task-form-section">
      <div className="container">
        <form className="task-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a new task..."
            value={taskInput}
            onChange={onInputChange}
          />

          <button type="submit">
            Add Task
          </button>
        </form>
      </div>
    </section>
  );
}

export default TaskForm;