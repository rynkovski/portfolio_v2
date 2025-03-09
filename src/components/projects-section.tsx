import ProjectItem from "./project-item";
import { Blocks, Brain, KanbanSquare, Users2 } from "lucide-react";
import { Icons } from "./icons/icons";

const PROJECTS = [
  {
    logo: (
      <Blocks className="size-7 rounded-sm bg-gradient-to-br from-muted/50 to-secondary/30 p-1.5" />
    ),
    name: "Extend UI",
    description:
      "Collection of React components that can be used in any project that uses shadcn",
    link: "https://www.extend-ui.com/",
  },
  {
    logo: (
      <Icons.animated className="size-7 rounded-sm bg-gradient-to-br from-muted/50 to-secondary/30 p-1.5 fill-primary" />
    ),
    name: "Animated",
    description:
      "An app that turns code into animations to visually demonstrate how code changes.",
    link: "https://animated.extend-ui.com/",
  },
  {
    logo: (
      <Users2 className="size-7 rounded-sm bg-gradient-to-br from-muted/50 to-secondary/30 p-1.5" />
    ),
    name: "Social App",
    description:
      "A web application that allows users to organize meetings, make bets, and complete quests.",
    link: "https://social-app-iota-six.vercel.app/",
  },
  {
    logo: (
      <KanbanSquare className="size-7 rounded-sm bg-gradient-to-br from-muted/50 to-secondary/30 p-1.5" />
    ),
    name: "ZenBoard",
    description: "Task management app based on kanban board.",
    link: "https://task-management-gamma-eight.vercel.app/",
  },
  {
    logo: (
      <Icons.deersight className="size-7 rounded-sm bg-gradient-to-br from-muted/50 to-secondary/30 p-1.5 fill-primary" />
    ),
    name: "DeerSight",
    description:
      "A mobile application built with React Native and Expo for managing personal finances.",
    link: "https://github.com/rynkovski/DeerSight",
  },
  {
    logo: (
      <Brain className="size-7 rounded-sm bg-gradient-to-br from-muted/50 to-secondary/30 p-1.5" />
    ),
    name: "Quiz App",
    description:
      "A full-stack quiz application with a Next.js frontend and NestJS backend.",
    link: "https://github.com/rynkovski/quiz-app",
  },
];
function ProjectsSection() {
  return (
    <section id="projects" className="-mb-3 mt-16 sm:mt-32">
      <span className="font-medium mb-5 sm:mb-6">Projects</span>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 -mx-4">
        {PROJECTS.map((project) => (
          <ProjectItem key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
