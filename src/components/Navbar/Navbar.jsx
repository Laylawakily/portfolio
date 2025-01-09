import Link from "next/link";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { VscChromeClose } from "react-icons/vsc";
import MenuBar from "../Home/MenuBar";
import RenderLink from "./RenderLink";

const RenderNavLink = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#project",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="fixed top-0 bg-black opacity-100 left-0 right-0 z-10">
      <div className="flex flex-wrap text-white items-center justify-between mx-auto p-3">
        <Link href="/" className="md:text-2xl text-xl font-semibold">
          Layla Wakily | Developer
        </Link>
        <div className="md:hidden block">
          {!openNav ? (
            <button onClick={() => setOpenNav(true)}>
              <GrMenu size={20} />
            </button>
          ) : (
            <button onClick={() => setOpenNav(false)}>
              <VscChromeClose size={20} />
            </button>
          )}
        </div>
        <div className="md:block hidden md:w-auto">
          <ul className="flex gap-8 md:flex-row">
            {RenderNavLink.map((link, index) => {
              return (
                <li className="text-lg font-semibold" key={index}>
                  <RenderLink href={link.path} title={link.title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {openNav && <MenuBar links={RenderNavLink} />}
    </nav>
  );
}
