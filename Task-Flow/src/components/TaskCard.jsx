function TaskCard({title,completed,onToggleTask,taskId,onDeleteTask}) {
  return (
    <article className="task-card">
      <div>
        <h3>{title}</h3>

        <span>{completed?"completed":"Active"}</span>
      </div>

      <div className="task-actions">
        <button type="button" onClick={()=>onToggleTask(taskId)}>
          {completed?"undo":"completed"}
        </button>

        <button type="button" onClick={()=>onDeleteTask(taskId)}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default TaskCard;