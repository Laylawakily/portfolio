import { myProjects } from "../lib/data";
import ProjectsCard from "./ProjectsCard";

export default function ProjectsSection() {
  return (
    <div className="xl:pl-14" id="project">
      <h2 className="text-center my-12 text-4xl font-bold">MY PROJECT</h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {myProjects.map((pro) => (
          <ProjectsCard
            key={pro.id}
            title={pro.title}
            imageUrl={pro.image}
            getUrl={pro.getUrl}
            githubUrl={pro.githubUrl}
          />
        ))}
      </div>
    </div>
  );
}
