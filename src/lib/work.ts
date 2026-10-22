export interface WorkItem {
  name: string;
  meta: string;
  href?: string;
}

export const PROJECTS: WorkItem[] = [
  {
    name: "Extend UI",
    meta: "Component library",
    href: "https://www.extend-ui.com/",
  },
];

export const EXPERIENCE: WorkItem[] = [
  {
    name: "Advant",
    meta: "Frontend Developer · 2025–Present",
  },
  {
    name: "Extend Labs",
    meta: "Co-Founder & Software Developer · 2024–Present",
    href: "https://www.extend-labs.com/",
  },
  {
    name: "Freelance",
    meta: "Frontend Developer · 2023–2025",
  },
];
