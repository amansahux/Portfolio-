import React, { memo } from "react";
import { motion } from "framer-motion";
import ReactPic from "../assets/React.webp";
import HtmlPic from "../assets/html-min.webp";
import Csspic from "../assets/css-min.webp";
import JsPic from "../assets/js-min.webp";
import TailwindPic from "../assets/tailwind.png";
import GsapPic from "../assets/gsap-min.webp";
import Github from "../assets/github-min.webp";
import Git from "../assets/git-icon-logo-png-transparent.png";

// 🔥 Animation Variants
const parentVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const childVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

// 🔥 Reusable Skill Card Component (with animation)
const SkillCard = memo(({ src, name, border }) => {
  return (
    <motion.div
      variants={childVariant}
      className={`w-20 bg-white rounded-[4px] overflow-hidden relative group transition-all hover:scale-105 ${
        border ? "border-2 border-white" : ""
      }`}
    >
      <img
        src={src}
        alt={name}
        loading="lazy"
        decoding="async"
        fetchpriority="low"
        className="h-full w-full object-cover object-center transition-opacity duration-500"
        draggable="false"
      />
    </motion.div>
  );
});

// 🔥 Map Data
const skillsData = [
  { src: ReactPic, name: "React" },
  { src: JsPic, name: "JavaScript" },
  { src: HtmlPic, name: "HTML" },
  { src: Csspic, name: "CSS" },
  { src: TailwindPic, name: "TailwindCSS", border: true },
  { src: GsapPic, name: "GSAP" },
  { src: Git, name: "Git" },
  { src: Github, name: "GitHub" },
];

const Skills = () => {
  return (
    <section
      className="SkillsSection bg-[#222222] mt-10 md:mt-20 py-[50px] md:py-[100px] px-[5vw] font-[Poppins]"
      aria-label="Skills Section"
    >
      <div className="Text">
        <h3 className="text-3xl md:text-6xl lg:text-7xl font-semibold leading-[40px] md:leading-[70px] whitespace-nowrap">
          Things I'm <span className="text-[#ff3b3b]">good</span> at
        </h3>
        <h5 className="text-[14px] am:text-[22px] md:text-[28px] lg:text-[32px] font-medium whitespace-nowrap">
          skills, interests, passion and hobbies
        </h5>
      </div>

      <div className="Skills py-2 flex flex-col justify-start items-start gap-6">
        <div className="Cont w-fit px-4 border-2 border-white rounded-[6px] mt-10">
          <h1 className="text-xl">development</h1>
        </div>

        {/* 🔥 Animation parent wrapper */}
        <motion.div
          variants={parentVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="DevSkills flex justify-start gap-10 shrink-0 flex-wrap"
        >
          {skillsData.map((item, i) => (
            <SkillCard
              key={i}
              src={item.src}
              name={item.name}
              border={item.border}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Skills);
