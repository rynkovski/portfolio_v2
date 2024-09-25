import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "tailwindcss",
  "chakraui",
  "shadcnui",
  "react",
  "html5",
  "css3",
  "markdown",
  "nextdotjs",
  "postgresql",
  "firebase",
  "reactquery",
  "reactrouter",
  "zod",
  "vite",
  "supabase",
  "vercel",
  "mui",
  "cypress",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "adobephotoshop",
  "figma",
  "playwright",
];
export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="text-muted-foreground flex gap-2 flex-col mx-4">
        <p>
          Hey, I&apos;m Karol Rynkowski, a{" "}
          <span className="text-white">frontend developer </span> who loves
          making cool stuff online. I&apos;m always{" "}
          <span className="text-white">learning</span> about new tech and ways
          to make things <span className="text-white">better</span>, from the
          basics to the latest tools.
        </p>
        <p>
          When I&apos;m not coding, I enjoy{" "}
          <span className="text-white">exploring</span> new places, keeping up
          with tech news, and hitting the gym.
        </p>
        <p>
          If you&apos;re <span className="text-white">interested</span> in
          working together, I&apos;m <span className="text-white">ready</span>{" "}
          to take on challenges and bring fresh ideas to the table. Let&apos;s
          team up and make cool stuff!
        </p>
      </section>
      <section className="text-center">
        <p className="text-3xl font-mono mb-2 mt-4">Skills</p>
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </section>
    </div>
  );
}
