import { LINK_CLASS } from "@/lib/styles";
import type { WorkItem } from "@/lib/work";

interface WorkListProps {
  items: WorkItem[];
}

export function WorkList({ items }: WorkListProps) {
  return (
    <ul className="flex flex-col gap-3 text-sm tracking-[-0.00563rem]">
      {items.map(({ name, meta, period, href }) => (
        <li
          key={name}
          className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
        >
          <span className="shrink-0 font-medium text-foreground">
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
          <span className="font-[460] text-muted-foreground sm:text-right">
            {meta}
            {period && (
              <span className="block whitespace-nowrap sm:inline">
                <span className="hidden sm:inline"> · </span>
                {period}
              </span>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}
