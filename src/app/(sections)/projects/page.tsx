"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectsData = [
  {
    id: 4,
    name: "ZenBoard",
    description: "Task management app based on kanban board.",
    link: "#",
    image: "/images/favicon-32x32.png",
    badges: [
      "React",
      "TypeScript",
      "Chakra UI",
      "zustand",
      "Tanstack Query",
      "Tanstack Router",
      "Firebase",
      "Cypress",
    ],
  },
  {
    id: 2,
    name: "Gearwheel",
    description: "A modern e-commerce admin panel.",
    link: "#",
    image: "/images/gearwheel-logo.svg",
    badges: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "zustand",
      "Tanstack Query",
      "React Router",
      "REST API",
    ],
  },
  {
    id: 5,
    name: "Budgetify",
    description: "A finance tracker app",
    link: "#",
    image: "/images/budgetify-logo.svg",
    badges: ["Next.js", "Material UI", "Supabase"],
  },
  {
    id: 3,
    name: "Metamiejskie",
    description:
      "A web application that allows users to organize meetings, make bets, and complete quests.",
    link: "#",
    image: "/images/metamiejskie-logo.svg",
    badges: [
      "Next.js",
      "TypeScript",
      "Tanstack Query",
      "TailwindCSS",
      "shadcn/ui",
    ],
  },

  {
    id: 6,
    name: "rynkovskiUI",
    description: "Ready-to-use UI elements.",
    link: "#",
    image: "/images/ui-logo.svg",
    badges: ["Next.js", "TypeScript", "TailwindCSS"],
  },
];

function Index() {
  return (
    <motion.div
      transition={{
        type: "spring",
        bounce: 0.7,
      }}
    >
      <section id="projects" className="p-12">
        <div className="grid w-full grid-cols-2 gap-x-10 md:grid-cols-3">
          {ProjectsData.map((project) => {
            return (
              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  bounce: 0.7,
                }}
                key={project.id}
                className="mt-5 text-center "
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  className="flex flex-col items-center justify-center gap-1"
                >
                  <div className="flex items-center justify-center w-16 h-16 p-3 border border-gray-800 rounded-full bg-gray-600/30">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="mt-2 mb-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {project.name}
                  </div>
                  <div className="max-w-[250px] text-sm font-normal text-gray-500 dark:text-gray-500">
                    {project.description}
                  </div>

                  {project.badges && (
                    <div className="flex flex-wrap items-center justify-center gap-1 mt-1">
                      {project.badges.map((badge) => {
                        return (
                          <Badge
                            key={badge}
                            className="text-xs font-medium bg-muted-foreground"
                          >
                            {badge}
                          </Badge>
                        );
                      })}
                    </div>
                  )}
                </a>
              </motion.div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}

export default Index;
