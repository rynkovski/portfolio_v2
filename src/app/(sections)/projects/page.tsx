import FadeUp from "@/components/fadeup";
import ProjectCard from "@/components/project-card";
import { PROJECTS } from "@/config/data";

function Index() {
  return (
    <FadeUp delay={0.2} duration={0.8}>
      <section id="projects" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PROJECTS.toSorted((a, b) => a.id - b.id).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </FadeUp>
  );
}

export default Index;
