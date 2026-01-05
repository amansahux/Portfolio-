import React, { useEffect, useRef, useState } from "react";
import { useScramble } from "../hooks/useScramble";
import { useTypewriter } from "../hooks/useTypewriter";

const Hero = ({ onContactClick }) => {
  const scramble = useScramble();
  const nameRef = useRef(null);
  const titleRef = useRef(null);

  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const scrambleText = "I’m a Frontend Developer.";
  const loopText = "AMAN SAHU.";
  const { result, isCompleted } = useTypewriter(loopText, 90, 1200);

  /** 🧠 Initial setup: detect mobile + scramble effect */
  useEffect(() => {
    const width = window.innerWidth;
    const isSmall = width < 640;
    setIsMobile(isSmall);

    if (width >= 1280 && nameRef.current) {
      scramble(nameRef.current);
    }
  }, []);

  /** 🎭 Fade overlay on scroll */
  useEffect(() => {
    const overlay = document.querySelector(".div");

    const handleScroll = () => {
      const progress = Math.min(window.scrollY / (window.innerHeight * 0.6), 1);
      if (overlay) overlay.style.opacity = 1 - progress;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** ✨ Mouse spotlight effect */
  useEffect(() => {
    const updateMousePos = (e) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePos);
    return () => window.removeEventListener("mousemove", updateMousePos);
  }, []);

  /** 🔥 Hover Scramble */
  const handleHover = () => {
    if (window.innerWidth < 1280 || isAnimating) return;

    setIsAnimating(true);
    scramble(titleRef.current);

    setTimeout(() => setIsAnimating(false), scrambleText.length * 90);
  };

  return (
    <section className="w-full h-screen bg-black text-white flex flex-col font-[Poppins] overflow-hidden 2xl:max-w-[2000px] 2xl:mx-auto cursor-none">

      {/* NAV */}
      <nav className="flex w-full items-center justify-between px-5 sm:px-10 xl:px-20 py-5 fixed top-0 left-0 z-10 cursor-auto backdrop-blur-[5px]">
        <h1
          ref={nameRef}
          data-value="Aman Sahu"
          className="text-3xl lg:text-4xl font-semibold tracking-wide Name"
        >
          Aman Sahu
        </h1>

        <button onClick={onContactClick} className="hidden sm:block py-[14px] px-[31px] text-xl bg-white text-black hover:bg-[#ff4b4b] hover:text-white rounded-full transition-all cursor-pointer">
          Contact
        </button>
      </nav>

      {/* CONTENT */}
      <div className="flex flex-col justify-start mt-30 px-5 2xl:px-10 max-w-[1900px] h-full gap-5 text-left relative">
        <h1 className="font-medium opacity-80 leading-tight text-[52px] md:text-[65px] lg:text-[90px] xl:text-[75px]">
          HELLO<span className="text-[#ff3b3b]">.</span>
        </h1>

        <h1
          ref={titleRef}
          onMouseEnter={handleHover}
          data-value={scrambleText}
          className="font-semibold xl:whitespace-nowrap text-[46px] md:text-[60px] lg:text-[83px] xl:text-[75px] leading-tight"
          style={{ fontFamily: "monospace" }}
        >
          {scrambleText}
        </h1>

        <h1
          className={`Name font-bold tracking-tight text-[#ff3b3b] text-[52px] md:text-[65px] lg:text-[90px] xl:text-[80px] whitespace-nowrap ${
            !isMobile && !isCompleted ? "border-r-4 border-[#ff3b3b] animate-blink" : ""
          }`}
        >
          {isMobile ? loopText : result}
        </h1>
      </div>

      {/* FOOTER EMAIL */}
      <div className="flex justify-center md:justify-end items-center text-2xl mb-5 mr-5 relative z-10">
        <h2 className="px-3 py-3 text-center w-[400px] border border-[#e7e7f144] rounded-full">
          amansahu1126@gmail.com
        </h2>
      </div>

      {/* SPOTLIGHT OVERLAY */}
      <div className="div pointer-events-none hidden lg:block"></div>
    </section>
  );
};

export default Hero;
