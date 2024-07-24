"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectsData = [
  {
    id: 1,
    name: "syntaxUI",
    description: "Ready-to-use UI elements designed for rapid development.",
    link: "https://syntaxui.com",
    image: "/next.svg",
  },
  {
    id: 2,
    name: "Prettyfolio",
    description: "A curated collection of portfolios for inspiration.",
    link: "https://prettyfolio.com",
    image: "/next.svg",
  },
  {
    id: 5,
    name: "Enchant",
    description: "A vibrant theme for Visual Studio Code.",
    link: "https://enchant.ansubkhan.com",
    image: "/next.svg",
  },
  {
    id: 3,
    name: "Ansubkhan.com",
    description: "My personal website, blogs and newsletter.",
    link: "https://ansubkhan.com",
    image: "/next.svg",
  },
  {
    id: 4,
    name: "Quote Vault",
    description: "Social media, but for sharing quotes.",
    link: "https://quote-vault.vercel.app",
    image: "/next.svg",
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
      <section id="projects">
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
                className="mt-5 text-center flex items-center flex-col justify-center"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                >
                  <div className="mb-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {project.name}
                  </div>
                  <div className="max-w-[250px] text-sm font-normal text-gray-500 dark:text-gray-500">
                    {project.description}
                  </div>
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
