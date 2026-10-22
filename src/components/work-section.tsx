"use client";

import { WorkList } from "@/components/work-list";
import { cn } from "@/lib/utils";
import { EXPERIENCE, PROJECTS } from "@/lib/work";
import { useState } from "react";

const TABS = [
  { id: "projects", label: "Projects", items: PROJECTS },
  { id: "experience", label: "Experience", items: EXPERIENCE },
].filter((tab) => tab.items.length > 0);

export function WorkSection() {
  const [activeId, setActiveId] = useState(TABS[0].id);
  const activeTab = TABS.find((tab) => tab.id === activeId) ?? TABS[0];

  return (
    <section id="work" className="fade-up [--i:7] mt-12">
      <div
        role="tablist"
        aria-label="Work"
        className="flex items-center gap-4 pb-4 text-sm font-medium tracking-[-0.00563rem]"
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
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
        ))}
      </div>
      <div key={activeTab.id} role="tabpanel" className="tab-fade">
        <WorkList items={activeTab.items} />
      </div>
    </section>
  );
}
