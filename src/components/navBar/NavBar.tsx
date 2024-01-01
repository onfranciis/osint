import Image from "next/image";
import "./NavBar.scss";
import Link from "next/link";
import { NavBarLinks } from "@/utils/Links";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link href="">
        <Image alt="OSINT Industries" src="/logo.svg" width={171} height={18} />
      </Link>

      <div className="links">
        {NavBarLinks.map((navLink) => (
          <Link href={navLink.url} key={navLink.title}>
            <p>{navLink.title}</p>

            {navLink.expand && (
              <Image
                alt={`${navLink} Options`}
                src="/arrow-down.svg"
                width={14}
                height={14}
              />
            )}
          </Link>
        ))}
      </div>

      <Link href="">
        <p>Get started</p>

        <Image
          alt="Get started"
          src="/arrow-right.svg"
          width={14}
          height={14}
        />
      </Link>
    </nav>
  );
};

export default NavBar;
