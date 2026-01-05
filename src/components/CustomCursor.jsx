import { useEffect, useState } from "react";

const CustomCursor = ({ hidden }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [size, setSize] = useState(18);
  const [scale, setScale] = useState(1);
  const [isIdle, setIdle] = useState(false);
  const [filled, setFilled] = useState(false);

  // 🧠 Smooth trailing movement (spring-like)
  useEffect(() => {
    let mouseX = 0,
      mouseY = 0;
    let currentX = 0,
      currentY = 0;
    let lastMoveTime = Date.now();

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMoveTime = Date.now();
      setIdle(false);
    };

    const animate = () => {
      const speed = 0.12;
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;
      setPos({ x: currentX, y: currentY });

      // idle detect
      if (Date.now() - lastMoveTime > 1200) setIdle(true);

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // 🎯 Hover logic
  useEffect(() => {
    const handleHover = (e) => {
      const tag = e.target.tagName.toLowerCase();
      const clickable =
        tag === "button" ||
        e.target.getAttribute("role") === "button" ||
        e.target.classList.contains("cursor-pointer") ||
        tag === "a";

      if ( tag === "button") {
        setSize(45);
        setScale(1.3);
        setFilled(true);
      } else if (
        tag === "h1" ||
        tag === "h2" ||
        tag === "h3" ||
        tag === "p" ||
        tag === "span"
      ) {
        setSize(26);
        setScale(1.25);
        setFilled(false);
      } else {
        setSize(18);
        setScale(1);
        setFilled(false);
      }
    };

    window.addEventListener("mouseover", handleHover);
    return () => window.removeEventListener("mouseover", handleHover);
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-[999] transition-opacity duration-300 
      ${hidden || isIdle ? "opacity-0" : "opacity-100"} hidden xl:block`}
      style={{
        left: pos.x - size / 2,
        top: pos.y - size / 2,
        width: size,
        height: size,
        transform: `scale(${scale})`,
        transition: "transform 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      <div
        className={`w-full h-full rounded-full 
        ${
          filled
            ? "bg-transparent border border-white/70 mix-blend-difference shadow-[0_0_30px_rgba(255,255,255,0.6)]"
            : "border border-white/70 "
        }`}
      />
    </div>
  );
};

export default CustomCursor;
