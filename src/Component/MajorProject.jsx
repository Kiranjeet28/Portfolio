import MajorComp from "./InnerComponents/MajorComp"
import { projects } from "../Data"


export default function MajorProject() {
  return (
    <div className='flex flex-wrap equal-height'>
      {projects.map(project => (
        <MajorComp
          key={project.id}
          id={project.id}
          img={project.img}
          title={project.title}
          tech={project.tech}
          link={project.link}
        />
      ))}
    </div>
  )
}
