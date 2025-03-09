import { Icons } from "./icons/icons";
import Link from "next/link";
import { Mail } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:rynkowski.it@gmail.com",
    icon: <Mail className="size-5" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/rynkovski",
    icon: <Icons.gitHub className="fill-primary size-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/karol-rynkowski",
    description: "Connect with me on LinkedIn",
    icon: <Icons.linkedin className="size-5" />,
  },
];

function Header() {
  return (
    <header className="flex gap-4 items-center sm:justify-between justify-center w-full flex-col sm:flex-row mt-8">
      <div className="flex items-center gap-4 justify-center">
        <div className="flex sm:items-start justify-center flex-col items-center">
          <h1 className="text-medium inline-block font-medium no-underline">
            Karol Rynkowski
          </h1>
          <p className="text-medium font-medium leading-none text-muted-foreground">
            Software Developer
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-4">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
