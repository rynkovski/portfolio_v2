import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "./icons/icons";

const skills = [
  { name: "HTML", icon: <Icons.html5 color="#E34F26" /> },
  { name: "JavaScript", icon: <Icons.javascript color="#F7DF1E" /> },
  { name: "TypeScript", icon: <Icons.typescript color="#3178C6" /> },
  { name: "React", icon: <Icons.react color="#61DAFB" /> },
  { name: "Next.js", icon: <Icons.nextdotjs /> },
  { name: "CSS", icon: <Icons.css3 color="#1572B6" /> },
  { name: "tailwindcss", icon: <Icons.tailwind color="#06B6D4" /> },
  { name: "Framer Motion", icon: <Icons.motion className="stroke-primary" /> },
  { name: "MUI", icon: <Icons.mui color="#007FFF" /> },
  { name: "Figma", icon: <Icons.figma color="#F24E1E" /> },
  { name: "ReactQuery", icon: <Icons.reactquery color="#FF4154" /> },
  { name: "Vite", icon: <Icons.vite color="#646CFF" /> },
  {name: "Node.js", icon: <Icons.nodejs color="#3C873A" />},
  {name: "Prisma", icon: <Icons.prisma color="#3C873A" />},
  {name: "NestJS", icon: <Icons.nestjs color="#E0234E" />},
  { name: "Supabase", icon: <Icons.supabase color="#3FCF8E" /> },
  { name: "Firebase", icon: <Icons.firebase color="#DD2C00" /> },
  {
    name: "Playwright",
    icon: <Icons.playwright color="#45ba4b" />,
  },
  { name: "Photoshop", icon: <Icons.photoshop color="#31A8FF" /> },
  { name: "Markdown", icon: <Icons.markdown /> },
  { name: "GIT", icon: <Icons.git color="#F05032" /> },
  { name: "Github", icon: <Icons.gitHub /> },
  { name: "Vercel", icon: <Icons.vercel /> },
];
function SkillsCard() {
  return (
    <Card className="w-full max-w-3xl border-muted">
      <CardContent className="grid gap-4 grid-cols-2  sm:grid-cols-4 lg:grid-cols-5 py-6">
        {skills.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </CardContent>
    </Card>
  );
}

export default SkillsCard;

function SkillItem({ ...props }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="size-12">{props.icon}</div>
      <span>{props.name}</span>
    </div>
  );
}
