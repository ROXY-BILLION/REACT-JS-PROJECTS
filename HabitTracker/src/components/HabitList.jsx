import HabitCard from "./HabitCard";

function HabitList({habits,onToggleTask,onDeleteHabit}) {
  return (
    <section className="habits-section" id="habits">
      <div className="container">
        <div className="habits-header">
          <div className="section-label">
            <span>YOUR ROUTINE</span>
            <h2>Today's habits</h2>
          </div>

        </div>

        <div className="habit-list">
          {habits.map((habit) => (
            <HabitCard key={habit.id}
              habitId={habit.id}
              title={habit.title}
              completed={habit.completed}
              onToggleTask={onToggleTask}
              onDeleteHabit={onDeleteHabit}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HabitList;