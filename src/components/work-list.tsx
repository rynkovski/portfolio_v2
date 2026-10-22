import { LINK_CLASS } from "@/lib/styles";
import type { WorkItem } from "@/lib/work";

interface WorkListProps {
  items: WorkItem[];
}

export function WorkList({ items }: WorkListProps) {
  return (
    <ul className="flex flex-col gap-4 text-sm tracking-[-0.00563rem]">
      {items.map(({ name, meta, href }) => (
        <li key={name} className="flex flex-col gap-1">
          <span className="font-medium text-foreground">
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={LINK_CLASS}
              >
                {name}
              </a>
            ) : (
              name
            )}
          </span>
          <span className="font-[460] text-muted-foreground">{meta}</span>
        </li>
      ))}
    </ul>
  );
}
