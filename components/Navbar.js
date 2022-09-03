import React from "react";
import { Toolbar, Button } from "react95";
import Link from "next/link";

export default function Navbar() {
  return (
    <Toolbar className="mb-5">
      <Link href="/">
        <Button variant="menu" size="sm">
          About Me
        </Button>
      </Link>
      <Link href="/education">
        <Button variant="menu" size="sm">
          Education
        </Button>
      </Link>
      <Link href="/projects">
        <Button variant="menu" size="sm">
          Projects
        </Button>
      </Link>
      <Link href="/appearance">
        <Button variant="menu" size="sm">
          Appearance 🎨
        </Button>
      </Link>
    </Toolbar>
  );
}
