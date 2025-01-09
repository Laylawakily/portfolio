import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { mySkill } from "../lib/data";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="mt-2 gap-2 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
        {mySkill.map((item) => {
          return (
            <button className="px-2 text-sm  font-semibold py-1 border-purple-300 border rounded-full text-white">
              {item.skill}
            </button>
          );
        })}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul>
        <li>
          I am a high school graduate, and I started learning programming. I
          began learning on my own by watching educational videos on YouTube and
          practicing.
        </li>
      </ul>
    ),
  },
  {
    title: "Exprience",
    id: "Exprience",
    content: (
      <ul>
        <li>
          I do not have years of work experience, but I worked as an intern for
          six months. During this time, I can proudly say that I became a
          front-end developer.
        </li>
      </ul>
    ),
  },
];
export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, setStartTransition] = useTransition();

  const handlehangeTab = (id) => {
    setStartTransition(() => {
      setTab(id);
    });
  };
  return (
    <div id="about">
      <div className="text-white md:grid md:grid-cols-2 gap-8 items-center py-8 md:px-4 xl:gap-16 sm:py-16 xl:py-16 xl:pl-14">
        <img src="/images/my-pro.jpg" alt="" />
        <div className="mt-4 md:mt-0 flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About me</h2>
          <p>
            My name is Layla, an Afghan woman. Despite all the difficult
            conditions in Afghanistan, I succeeded in becoming a front-end
            developer. But this is not my final destination; it’s just a step
            toward my goal. I first got into programming in 2021, and in 2024, I
            worked intensively to become a professional front-end developer. I
            can say it has paid off, but my ultimate goal is to become a
            software engineer, and I truly believe in my abilities. This
            portfolio is proof of how far I’ve come and what I’ve achieved.
          </p>
          <div className="flex mt-8 justify-start gap-6">
            <TabButton
              selcteTab={() => handlehangeTab("skills")}
              active={tab === "skills"}
              chilren={"skills"}
            ></TabButton>
            <TabButton
              selcteTab={() => handlehangeTab("Education")}
              active={tab === "Education"}
              chilren={"Education"}
            ></TabButton>
            <TabButton
              selcteTab={() => handlehangeTab("Exprience")}
              active={tab === "Exprience"}
              chilren={"Exprience"}
            ></TabButton>
          </div>
          <div className="mt-8"></div>
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </div>
  );
}
