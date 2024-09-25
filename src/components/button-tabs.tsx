"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const tabs = [
  { name: "About me", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

interface TabProps {
  text: string;
  href: string;
  selected: boolean;
  setSelected: (text: string) => void;
}

const Tab = ({ href, text, selected, setSelected }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(href)}
      className={`${
        selected
          ? "text-white"
          : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
      } relative rounded-md px-2 py-1 text-sm font-medium transition-colors`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-md bg-primary"
        ></motion.span>
      )}
    </button>
  );
};

const ButtonShapeTabs = () => {
  const pathname = usePathname();
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-4">
      {tabs.map((tab, index) => (
        <Link href={tab.href} key={tab.name}>
          <Tab
            href={tab.href}
            text={tab.name}
            selected={selected === tab.href}
            setSelected={setSelected}
          />
        </Link>
      ))}
    </div>
  );
};

export default ButtonShapeTabs;
