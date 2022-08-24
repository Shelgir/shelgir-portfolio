import React from "react";
import { Toolbar, Button } from "react95";
import Link from "next/link";

export default function Navbar() {
  return (
    <Toolbar>
      <Link href="/">
        <Button variant="menu" size="sm">
          About Me
        </Button>
      </Link>
      <Button variant="menu" size="sm">
        Edit
      </Button>
      <Button variant="menu" size="sm">
        Help
      </Button>
      <Link href="/game">
        <Button variant="menu" size="sm">
          Game 🎮
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
