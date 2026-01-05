import React, { useEffect, useRef, useState, memo, useCallback } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroPic from "../assets/Image.jpg";
import CustomCursor from "./CustomCursor";

gsap.registerPlugin(ScrollTrigger);

const LazyImage = memo(({ src, alt }) => {
  return (
    <img
      src={src}
      loading="lazy"
      alt={alt}
      className="object-cover h-full w-full"
      draggable="false"
      decoding="async"
    />
  );
});

const sectionsData = [
  {
    title: "About me",
    content: `I'm Aman Sahu! a frontend dev who loves clean UI, smooth animations and websites that feel good, not just work. I work confidently with HTML, CSS, JavaScript, React, and modern frontend tools always aiming for cleaner and smarter code.
    
    Whether I’m building solo or collaborating, I focus on communication, clarity, and creating things that make sense for real users not just code that looks fancy. If something breaks, I debug, learn, and try again. For me, this journey isn’t just about coding! it's about improving mindset, discipline, and creativity every day.`,
  },
  {
    title: "Role",
    content: `As a frontend developer, I turn ideas and designs into smooth, responsive, and user-friendly experiences using HTML, CSS, JavaScript, React, and modern tools. I care about spacing, animations, performance, accessibility, and how the UI feels! not just how it looks.
    
    My role includes building clean layouts, connecting APIs, fixing bugs, and adding clean micro-interactions that make the experience alive. For me, frontend isn’t just code! it’s bringing ideas to life and making the web better.`,
  },
  {
    title: "Education",
    content: `I'm in my final year of Diploma in Computer Science Engineering. I started building websites in 2nd semester! out of curiosity, not assignments.
    
    What started as random experiments turned into a skill and passion. I learn by building, breaking, fixing, and repeating projects taught me more than theory. This journey helped me understand not just *how* things work, but *why* they work, and how to turn ideas into real experiences.`,
  },
];

const About = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

  // Marquee (kept same)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let x = 0;
    let velocity = 0;
    let lastScroll = window.scrollY;
    let rafId;
    const width = el.scrollWidth / 2;

    const loop = () => {
      x += velocity;
      velocity *= 0.62;
      if (x > width) x -= width;
      if (x < 0) x += width;
      el.style.transform = `translateX(${-x}px)`;

      if (Math.abs(velocity) > 0.1) rafId = requestAnimationFrame(loop);
      else rafId = null;
    };

    const onScroll = () => {
      const newScroll = window.scrollY;
      velocity += (newScroll - lastScroll) * 0.18;
      lastScroll = newScroll;
      if (!rafId) rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // ✨ GSAP Animations: smooth, clean, lightweight
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const textCard = container.querySelector(".left-card");
    const imgCard = container.querySelector(".right-card");
    const accordionItems = container.querySelectorAll(".accordion-item");

    // Top text
    gsap.from(container.querySelector(".ScrollName"), {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
      },
    });

    // Cards reveal stagger
    gsap.from([textCard, imgCard], {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: textCard,
        start: "top 85%",
        once: true,
      },
    });

    // Accordion fade reveal
    gsap.from(accordionItems, {
      opacity: 0,
      y: 10,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: accordionItems[0],
        start: "top 90%",
        once: true,
      },
    });

  }, []);

  const toggleAccordion = useCallback((i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  }, []);

  return (
    <section
      ref={containerRef}
      className="aboutSection w-full bg-black text-white px-3 md:pt-20 pt-10 max-w-[2000px] mx-auto lg:px-10"
    >
      {/* Scroll Text */}
      <div className="ScrollName w-full pb-20 overflow-hidden select-none pointer-events-none cursor-none">
        <div
          ref={scrollRef}
          className="Content flex gap-6 font-[Moranga] text-[60px] sm:text-[80px] md:text-[100px] whitespace-nowrap will-change-transform"
        >
          {Array.from({ length: 6 }, (_, i) => (
            <h1 key={i}>Aman Sahu ?</h1>
          ))}
        </div>
      </div>

      {/* TOP SECTION */}
      <div className="AboutTop flex flex-col lg:flex-row lg:justify-center lg:gap-[4%] items-center gap-5">
        <div className="left-card bg-[#242527] rounded-[24px] h-[60vh] lg:h-[80vh] w-full max-w-[670px] lg:w-[48%]">
          <h2 className="uppercase px-7 pt-10 text-[25px] md:text-[42px] lg:text-[52px] md:leading-[60px] lg:leading-[70px] font-[Poppins] font-medium">
            I build websites that vibe — clean UI,{" "}
            <span className="text-[#8c8c8cad]">smooth</span>{" "}
            <span className="text-[#ED3B44]">interactions</span>, and designs
            that get the <span className="text-[#ED3B44]">user</span>, not just impress them.
          </h2>
        </div>

        <div className="right-card bg-[#242527] rounded-[24px] h-[70vh] lg:h-[80vh] lg:w-[48%] overflow-hidden">
          <LazyImage src={HeroPic} alt="Hero" />
        </div>
      </div>

      {/* Accordion */}
      <div className="AboutBottom w-full pt-10 md:pt-20">
        {sectionsData.map((sec, i) => (
          <div
            key={i}
            className="accordion-item border-b border-[#ffffff7b]"
            onClick={() => toggleAccordion(i)}
          >
            <div className="Layer py-5 flex justify-between items-center cursor-pointer">
              <h2 className="uppercase text-[#fafafaad] font-[600]">{sec.title}</h2>
              <span className="rounded-full border border-[#ffffff6a] w-8 h-8 flex justify-center items-center transition-all">
                {openIndex === i ? <ChevronUp /> : <ChevronDown />}
              </span>
            </div>

            <div
              className={`Content text-xl font-[Urbanist] overflow-hidden transition-[max-height,opacity] duration-300 2xl:pl-[50%] ${
                openIndex === i ? "max-h-[1000px] py-5 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="leading-[26px] whitespace-pre-line">{sec.content}</p>
            </div>
          </div>
        ))}
      </div>
      <CustomCursor/>
    </section>
  );
};

export default memo(About);
