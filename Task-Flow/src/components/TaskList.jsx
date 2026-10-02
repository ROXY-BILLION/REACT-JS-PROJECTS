import TaskCard from "./TaskCard";

function TaskList({tasks,onToggleTask,onDeleteTask}) {
  return (
    <section className="tasks-section" id="tasks">
      <div className="container">

        <div className="section-heading">
          <span>YOUR WORK</span>
          <h2>Tasks</h2>
        </div>

        <div className="task-list">
          {tasks.map((task) => (
            <TaskCard key={task.id}
              taskId = {task.id}
              title={task.title}
              completed={task.completed}
              onToggleTask={onToggleTask}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TaskList;