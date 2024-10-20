import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons/icons";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";

type Project = {
  id: number;
  name: string;
  description: string;
  links: { name: string; href: string }[];
  image: string;
  badges: string[];
  inProgress?: boolean;
};

function ProjectCard({ project }: { project: Project }) {
  const { name, description, links, image, badges, inProgress } = project;
  return (
    <Card className="flex flex-col border-muted  mx-2">
      <CardHeader>
        <Image
          src={image}
          alt={name}
          width={500}
          height={300}
          className="h-40 w-full object-cover object-top"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardTitle className="items-center justify-start flex">
          {name}

          {inProgress && (
            <Badge className="ml-2 text-xs" variant={"outline"}>
              In Progress
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex h-full flex-col items-start justify-between gap-4">
        {badges && badges.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {badges.map((badge) => (
              <Badge
                key={badge}
                className="px-1 py-0 text-[10px]"
                variant="secondary"
              >
                {badge}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links.map((link) => (
              <Button
                asChild
                variant="default"
                size={"sm"}
                key={link.href}
                className="text-xs flex items-center px-2 h-7 rounded-sm"
              >
                <Link href={link.href} target="_blank" rel="noreferrer">
                  {link.name === "Code" && (
                    <Icons.gitHub className="fill-primary h-3 w-3 mr-1" />
                  )}
                  {link.name === "Website" && (
                    <Globe className="fill-primary h-3 w-3 mr-1" />
                  )}
                  {link.name}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
