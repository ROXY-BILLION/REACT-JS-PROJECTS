function HabitCard({title,completed,onToggleTask,habitId,onDeleteHabit}) {
  return (
    <article className="habit-card">
      <div className="habit-main">
        <div className="habit-check">
          ✓
        </div>

        <div className="habit-info">
          <h3>{title}</h3>
          
        </div>
      </div>

      <div className="habit-status">

        <div className="habit-actions">
          <button type="button"onClick={()=>onToggleTask(habitId)}>
            {completed?"undo":"completed"}
          </button>

          <button type="button" className="delete-button" onClick={()=>onDeleteHabit(habitId)}>
            ×
          </button>
        </div>
      </div>
    </article>
  );
}

export default HabitCard;