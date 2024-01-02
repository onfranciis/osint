"use client";

import Image from "next/image";
import "./NavBar.scss";
import Link from "next/link";
import { NavBarLinks } from "@/utils/Links";
import SideBar from "./SideBar";
import { useState } from "react";

const NavBar = () => {
  const [display, setDisplay] = useState(false);

  const handleSetDisplay = (value: boolean) => {
    setDisplay(() => value);
  };

  return (
    <nav className="NavBar">
      <Link href="">
        <Image alt="OSINT Industries" src="/logo.svg" width={171} height={18} />
      </Link>

      <div className="links">
        {NavBarLinks.map((navLink) => (
          <div key={navLink.title} className="navLink">
            <Link href={navLink.url}>
              <div className="main">
                <p>{navLink.title}</p>

                {navLink.expand && (
                  <Image
                    alt={`${navLink} Options`}
                    src="/arrow-down.svg"
                    width={14}
                    height={14}
                  />
                )}
              </div>

              <div className="decoration"></div>
            </Link>
          </div>
        ))}
      </div>

      <Link href="" className="getStarted">
        <p>Get started</p>

        <Image
          alt="Get started"
          src="/arrow-right.svg"
          width={14}
          height={14}
        />
      </Link>

      <button className="burger" onClick={() => handleSetDisplay(true)}>
        <Image alt="Open menu" src="/menu.svg" width={27} height={27} />
      </button>

      <SideBar display={display} setDisplay={handleSetDisplay} />
    </nav>
  );
};

export default NavBar;
