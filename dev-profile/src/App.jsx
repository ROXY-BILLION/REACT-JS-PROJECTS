import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import SkillList from "./components/SkillList";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";

function App() {
  const user = {
    name: "Okeke Divine Gift",
    role: "Software Engineer",
    bio: "I build modern software, 2D and 3D games, and AI systems.",
  };

  const skills = [
    "JavaScript",
    "React",
    "React Native",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
  ];

  const projects = [
    {
      id: 1,
      title: "Task Manager",
      description: "A full-stack task management application.",
      technology: "MERN Stack",
    },
    {
      id: 2,
      title: "GameHub",
      description: "A gaming platform for discovering and playing games.",
      technology: "React",
    },
    {
      id: 3,
      title: "X-Technologies",
      description: "A modern technology and software platform.",
      technology: "MERN Stack",
    },
  ];

  return (
    <div className="app">
      <Header />

      <main>
        <ProfileCard
          name={user.name}
          role={user.role}
          bio={user.bio}
        />

        <SkillList skills={skills} />

        <ProjectList projects={projects} />
      </main>

      <Footer />
    </div>
  );
}

export default App;