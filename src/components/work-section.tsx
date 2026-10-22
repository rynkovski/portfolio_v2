"use client";

import { fadeStaggerItem } from "@/components/fadeup";
import { WorkList } from "@/components/work-list";
import { cn } from "@/lib/utils";
import { EXPERIENCE, PROJECTS } from "@/lib/work";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const TABS = [
  { id: "projects", label: "Projects", items: PROJECTS },
  { id: "experience", label: "Experience", items: EXPERIENCE },
].filter((tab) => tab.items.length > 0);

export function WorkSection() {
  const [activeId, setActiveId] = useState(TABS[0].id);
  const prefersReducedMotion = useReducedMotion();
  const activeTab = TABS.find((tab) => tab.id === activeId) ?? TABS[0];

  return (
    <motion.section id="work" variants={fadeStaggerItem} className="mt-12">
      <div
        role="tablist"
        aria-label="Work"
        className="flex items-center gap-2 pb-3 font-mono text-sm"
      >
        {TABS.map((tab, index) => (
          <span key={tab.id} className="flex items-center gap-2">
            {index > 0 && (
              <span aria-hidden className="text-muted-foreground/50">
                /
              </span>
            )}
            <button
              type="button"
              role="tab"
              aria-selected={tab.id === activeTab.id}
              onClick={() => setActiveId(tab.id)}
              className={cn(
                "cursor-pointer transition-colors",
                tab.id === activeTab.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {tab.label}
            </button>
          </span>
        ))}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeTab.id}
          role="tabpanel"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: -4 }}
          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <WorkList items={activeTab.items} />
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}
