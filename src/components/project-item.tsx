import Link from "next/link";
import { ReactElement } from "react";

interface ProjectItemProps {
  logo: ReactElement;
  name: string;
  description: string;
  link: string;
}

function ProjectItem({ logo, name, description, link }: ProjectItemProps) {
  return (
    <Link
      href={link}
      className="hover:scale-101 transition-all hover:bg-secondary/20 rounded-md"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="p-4 flex flex-col">
        <span>{logo}</span>
        <span className=" mt-2">{name}</span>
        <span className="text-muted-foreground mt-1">{description}</span>
      </div>
    </Link>
  );
}

export default ProjectItem;
