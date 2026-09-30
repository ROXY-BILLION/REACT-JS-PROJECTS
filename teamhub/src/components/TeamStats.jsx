function TeamStats({ProjectsCompleted,PerfectRating,Availability,UncompletedProject}) {
    return (
        <div className="div">
            <h1>ProjectsCompleted:{ProjectsCompleted}</h1>
            <h2>PerfectRating:{PerfectRating}</h2>
            <h3>Availability:{Availability}</h3>
            <h3>UncompletedProjects:{UncompletedProject}</h3>
        </div> 
    )
}
export default TeamStats;