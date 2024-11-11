import Image from "next/image";
import ProfilePhoto from "../../public/images/photo.jpg";
import { Icons } from "./icons/icons";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Linkedin } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/rynkovski",
    icon: <Icons.gitHub className="fill-primary h-4 w-4" />,
  },
   {
    name: "LinkedIn",
    href: "https://linkedin.com/in/karol-rynkowski",
    description: "Connect with me on LinkedIn",
    icon: <Linkedin  className=" h-4 w-4" />,
  },
  {
    name: "Twitter",
    href: "https://x.com/rynkovski",
    icon: <Icons.twitter className="fill-primary h-4 w-4" />,
  },
];

function Header() {
  return (
    <header className="p-8 flex gap-4 items-center sm:justify-between justify-center w-full flex-col sm:flex-row">
      <div className="flex items-center gap-4 justify-center">
        <Image
          src={ProfilePhoto}
          alt="profile photo"
          width={100}
          height={100}
          className="z-10 rounded-full h-20 w-20"
          priority
        />
        <div className="flex items-start justify-center flex-col">
          <h1 className="text-2xl font-bold tracking-tighter z-10 text-primary">
            Karol Rynkowski
          </h1>
          <p className="text-sm text-muted-foreground">Software Developer</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button variant="outline" size="icon">
              {link.icon}
            </Button>
          </Link>
        ))}
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
