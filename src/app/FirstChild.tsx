"use client";

import { Inter } from "next/font/google";
import "../styles/globals.scss";
import NavBar from "@/components/navBar/NavBar";
import SideBar from "@/components/navBar/SideBar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function FirstChild({
  children,
}: {
  children: React.ReactNode;
}) {
  const [display, setDisplay] = useState(false);

  const handleSetDisplay = (value: boolean) => {
    setDisplay(() => value);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar display={display} setDisplay={handleSetDisplay} />
        <SideBar display={display} setDisplay={handleSetDisplay} />

        {children}
      </body>
    </html>
  );
}
