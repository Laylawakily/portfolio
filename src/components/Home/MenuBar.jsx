import React from "react";
import RenderLink from "../Navbar/RenderLink";

export default function MenuBar({ links }) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <RenderLink href={link.path} title={link.title} />
          </li>
        );
      })}
    </ul>
  );
}
