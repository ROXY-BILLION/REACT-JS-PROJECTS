import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HabitForm from "./components/HabitForm";
import HabitStats from "./components/HabitStats";
import HabitList from "./components/HabitList";
import Footer from "./components/Footer";



function App() {
  const [taskInput, setTaskInput] = useState("");
  const [habits,setHabits] = useState([
    {
    id: 1,
    title: "Read for 30 minutes",
    completed: false,
  },
  {
    id: 2,
    title: "Exercise",
    completed: true,
  },
  {
    id: 3,
    title: "Practice Coding",
    completed: false,
  },
  {
    id: 4,
    title: "Drink Water",
    completed: true,
  },
  {
    id: 5,
    title: "Study JavaScript",
    completed: false,
  },
  ])


  function handleInput(event) {
    setTaskInput(event.target.value)
  }

  function handleAdd(habitTitle){
    const trimmedTitle = habitTitle.trim();
    if (!trimmedTitle) {
      return;
    }
    const newHabit = {
      id: Date.now(),
      title: trimmedTitle,
      completed:false,
    }
    setHabits((prevHabits) => [...prevHabits, newHabit]);
    setTaskInput("")
  }
  function handleToggleTask(habitId) {
   setHabits((prevHabits)=>prevHabits.map((habit)=>habit.id === habitId ? {...habit , completed:!habit.completed}:habit))
  }
  function handleDeleteHabit(habitId) {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== habitId));
  }

  const totalHabits = habits.length;
  const completedHabits = habits.filter((habit) => habit.completed).length;
  const activeHabits = habits.filter((habit) => !habit.completed).length;

  function handleClearCompleted() {
    setHabits((prevHabits)=>prevHabits.filter((habit)=>!habit.completed))
  }
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <HabitForm taskInput={taskInput} onInputChange={handleInput} onAddTask={handleAdd} />

        <HabitStats totalHabits={totalHabits} completedHabits={completedHabits} activeHabits={activeHabits} clearHabits={handleClearCompleted} />
        
        <HabitList habits={habits} onToggleTask={handleToggleTask} onDeleteHabit={handleDeleteHabit} />
      </main>

      <Footer />
    </div>
  );
}

export default App;