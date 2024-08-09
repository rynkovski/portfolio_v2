"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
const possibleRotations = [1.3, -1.3, 1.3, -1.3, 1.3, -1.3];

const pictures = [
  {
    id: 1,
    src: "/images/hawaii.jpeg",
    alt: "1",
    title: "hawaii",
  },
  {
    id: 2,
    src: "/images/hawaii.jpeg",
    alt: "2",
    title: "falls",
  },
  {
    id: 3,
    src: "/images/hawaii.jpeg",
    alt: "3",
    title: "usa",
  },
  {
    id: 4,
    src: "/images/hawaii.jpeg",
    alt: "4",
    title: "kauai",
  },
  {
    id: 5,
    src: "/images/hawaii.jpeg",
    alt: "5",
    title: "kauai",
  },
  {
    id: 6,
    src: "/images/hawaii.jpeg",
    alt: "6",
    title: "kauai",
  },
];

function Index() {
  return (
    <section id="gallery" className="p-12">
      <h1 className="text-3xl font-bold text-center">
        Few pics from my trips 🌍✨
      </h1>
      <div className="grid w-full grid-cols-1 gap-8 my-8 md:grid-cols-4">
        {pictures.map((picture, idx) => (
          <Picture key={picture.id} {...picture} idx={idx} />
        ))}
      </div>
    </section>
  );
}

const Picture = ({
  id,
  src,
  title,
  alt,
  idx,
}: {
  id: number;
  src: string;
  title: string;
  alt: string;
  idx: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      key={id}
      initial={{
        scale: 1,
        rotate: possibleRotations[idx % possibleRotations.length],
        opacity: 0,
      }}
      whileHover={{
        scale: 1.1,
        rotate: 0,
        transition: { duration: 0.2 },
      }}
      whileInView={{ opacity: 1, transition: { delay: idx / 100 } }}
      viewport={{ once: true }}
      onHoverStart={() => setIsVisible(true)}
      onHoverEnd={() => setIsVisible(false)}
      className={clsx(
        "relative place-self-center aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800"
      )}
    >
      <Image
        src={src}
        alt={alt}
        sizes="(min-width: 640px) 18rem, 11rem"
        className="absolute inset-0 object-cover w-full h-full"
        width={640}
        height={640}
      />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-end w-full bg-gradient-to-t from-black/75 via-black/0"
          >
            <h3 className="px-3 py-2 font-mono text-xs font-bold">{title}</h3>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Index;
