import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-100">
        &copy; {new Date().getFullYear()}
        <Link href="/">
          <Button size={"sm"} variant={"link"}>
            rynkovski
          </Button>
        </Link>
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;