"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectsData = [
  {
    id: 1,
    name: "Social App",
    description:
      "A web application that allows users to organize meetings, make bets, and complete quests.",
    link: "https://social-app-iota-six.vercel.app/",
    image: "/images/socialapp-logo.svg",
    badges: [
      "Next.js",
      "TypeScript",
      "Tanstack Query",
      "TailwindCSS",
      "shadcn/ui",
    ],
  },
  {
    id: 4,
    name: "ZenBoard",
    description: "Task management app based on kanban board.",
    link: "https://task-management-gamma-eight.vercel.app/",
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
    link: "https://github.com/KITHProject/gearwheel-frontend/tree/develop_v1",
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
    id: 6,
    name: "Umbra Virtunis",
    description: "Crypto game, walk to earn.",
    link: "https://umbra-virtunis.vercel.app/",
    image: "/images/umbra-virtunis-logo.png",
    badges: ["Next.js", "TypeScript", "TailwindCSS"],
    inProgress: true,
  },
];

function Index() {
  return (
    <motion.div
      transition={{
        type: "spring",
        bounce: 0.7,
      }}
      className="flex flex-col items-center justify-center p-12 pb-8"
    >
      <section id="projects">
        <div className="grid w-full grid-cols-2 gap-10 md:grid-cols-3">
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
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  className="flex flex-col items-center justify-center gap-1 relative"
                >
                  <div className="flex items-center justify-center w-16 h-16 p-2 border border-gray-800 rounded-full bg-gray-600/30">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="mt-2 mb-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {project.name}
                    {project.inProgress && (
                      <div className="absolute top-0 right-0">
                        <Badge className="text-xs font-medium bg-primary">
                          In Progress
                        </Badge>
                      </div>
                    )}
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
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}

export default Index;
