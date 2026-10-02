import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TaskForm from "./components/TaskForm";
import TaskStats from "./components/TaskStats";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
  const [tasks,setTasks] = useState([
  {
    id: 1,
    title: "Build React project",
    completed: false,
  },
  {
    id: 2,
    title: "Study JavaScript",
    completed: true,
  },
  {
    id: 3,
    title: "Practice CSS",
    completed: false,
  },
  ]);
  const [taskInput, setTaskInput] = useState("");
  function handleInput(event){
    setTaskInput(event.target.value);
  }

  function handleAddtask(taskTitle) {
    const trimmedTitle = taskTitle.trim();
    if (!trimmedTitle) {
      return;
    }
    const newTask = {
      id: Date.now(),
      title: trimmedTitle,
      completed: false
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
    setTaskInput("")
  }
  function handleToggleTask(taskId) {
    setTasks((prevTasks) => prevTasks.map((task) => task.id === taskId ? { ...task, completed: !task.completed } : task));
  }
  function handleDeleteTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task)=> task.id !== taskId))
  }
const totalTasks = tasks.length;

const completedCount = tasks.filter(
  (task) => task.completed
).length;

const activeCount = tasks.filter(
  (task) => !task.completed
).length;
  function handleClearCompleted() {
  setTasks((prevTasks) =>
    prevTasks.filter(
      (task) => !task.completed
    )
  );
}
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <TaskForm taskInput={taskInput} onInputChange={handleInput} onAddTask={handleAddtask} />

        <TaskStats totalTasks={totalTasks} activeCount={activeCount} completedCount={completedCount} onClearCompleted={handleClearCompleted} />

        <TaskList tasks={tasks} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} />
      </main>

      <Footer />
    </div>
  );
}

export default App;