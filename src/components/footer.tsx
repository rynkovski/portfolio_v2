import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function Footer() {
  return (
    <footer className="w-full">
      <p className="my-6 text-center text-sm text-muted-foreground">
        <span>&copy; {new Date().getFullYear()}</span>
        <Link
          href="https://github.com/rynkovski"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button
            variant={"link"}
            size={"sm"}
            className="text-muted-foreground hover:text-primary px-2"
          >
            rynkovski
          </Button>
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
