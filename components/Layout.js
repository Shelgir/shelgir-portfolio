import React from "react";
import { Window, WindowHeader, Button } from "react95";
import { GrFormClose } from "react-icons/gr";
import Navbar from "./Navbar";
import FooterBar from "./FooterBar";

export default function Layout({ children }) {
  return (
    <Window className="w-full min-h-screen flex flex-col">
      <WindowHeader className="window-header mb-1 flex justify-between">
        <span>Shelgir.exe</span>
        <Button>
          <span className="close-icon">
            <GrFormClose />
          </span>
        </Button>
      </WindowHeader>
      <Navbar />
      {children}
      {/* <FooterBar /> */}
    </Window>
  );
}
