import type { WorkItem } from "@/lib/work";

interface WorkListProps {
  items: WorkItem[];
}

const rowClass =
  "flex items-baseline justify-between gap-4 border-b border-border py-3 text-sm font-[460] tracking-[-0.00563rem]";

export function WorkList({ items }: WorkListProps) {
  return (
    <ul className="border-t border-border">
      {items.map(({ name, meta, href }) => {
        const content = (
          <>
            <span className="shrink-0 text-foreground">{name}</span>
            <span className="text-right text-muted-foreground transition-colors group-hover:text-foreground">
              {meta}
            </span>
          </>
        );

        return (
          <li key={name}>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${rowClass} group`}
              >
                {content}
              </a>
            ) : (
              <div className={rowClass}>{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
