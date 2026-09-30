import DepartmentCard from "./DepartmentCard";

function DepartmentSection({departments}) {
    return (
        <section className="department">
         {departments.map((department)=>(
            <DepartmentCard
                key={department}
                name={department}
            />
          ))}
        </section>
    )
}
export default DepartmentSection;