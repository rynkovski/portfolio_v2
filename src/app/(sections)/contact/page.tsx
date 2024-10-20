import FadeUp from "@/components/fadeup";
import { Icons } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const contactLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/direct_messages/create/rynkovski",
    description: "Message me on Twitter",
    icon: <Icons.twitter className="fill-primary w-10 h-10" />,
  },

  {
    name: "Mail",
    href: "mailto:rynkowski.it@gmail.com",
    description: "Send me an email",
    icon: <Mail className="w-12 h-12" />,
  },
  {
    name: "LinkedIn",
    href: "#",
    description: "Connect with me on LinkedIn",
    icon: <Linkedin className="w-12 h-12" />,
  },
];

function Index() {
  return (
    <FadeUp delay={0.2} duration={0.8}>
      <section
        id="contact"
        className="flex flex-col items-center justify-center"
      >
        <h1 className="text-center text-xl font-semibold pb-6">
          Let&apos;s team up and make cool stuff!
        </h1>

        <div className="flex justify-center flex-col sm:flex-row gap-8 sm:gap-24  mt-5">
          {contactLinks.map((link) => (
            <div
              key={link.name}
              className=" flex flex-col items-center justify-center text-center gap-4"
            >
              <Button asChild variant="outline" className="size-24">
                <Link
                  href={link.href}
                  className=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </Link>
              </Button>
              <span className="text-sm text-muted-foreground">
                {link.description}
              </span>
            </div>
          ))}
        </div>
      </section>
    </FadeUp>
  );
}

export default Index;
