import { ISideBarProps } from "@/types/nav";
import { NavBarLinks } from "@/utils/Links";
import Image from "next/image";
import Link from "next/link";

const SideBar = ({ display, setDisplay }: ISideBarProps) => {
  return (
    <>
      <div
        className={`exit ${display && "toggled"}`}
        onClick={() => setDisplay(false)}
      ></div>

      <nav className={`SideBar ${display && "toggled"}`}>
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
      </nav>
    </>
  );
};

export default SideBar;
