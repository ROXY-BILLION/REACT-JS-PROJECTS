import './App.css'
import DepartmentSection from './components/DepartmentSection';
import Header from './components/Header';
import Hero from './components/Hero';
import TeamSection from './components/TeamSection';
import TeamStats from './components/TeamStats';


function App() {
  const members = [
    {
      id: 1,
      name: "Divine",
      role: "Software Engineer",
      department: "Engineering",
      bio: "A prolific Developer",
      skills: "Html, Css, Js, React,Mern",
      availability: "available"
    },
    {
      id: 2,
      name: "Gift",
      role: "Ui/Ux Engineer",
      department: "Designer",
      bio: "Designer",
      skills: "Css",
      availability: "available"
    },
    {
      id: 3,
      name: "Christian",
      role: "Frontend Engineer",
      department: "Engineering",
      bio: "A prolific Developer",
      skills: "Html, Css, Js, React",
      availability: "available"
    }
  ];

  const departments = ["Engineering","Design","product"]

  const teamStats = {
    ProjectsCompleted: 12,
    PerfectRating: 100,
    Availability: "always",
    UncompletedProject: 2
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TeamSection members={members} />
        <DepartmentSection departments={departments} />
        <TeamStats
          ProjectsCompleted={teamStats.ProjectsCompleted}
          PerfectRating={teamStats.PerfectRating}
          Availability={teamStats.Availability}
          UncompletedProject={teamStats.UncompletedProject}
        />
      </main>
    </>
  )
}

export default App;
