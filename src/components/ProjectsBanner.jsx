import React from "react";
import { motion } from "framer-motion";

import BikeRental from "../assets/BikeRental.png";
import GravityTeam from "../assets/Gravity Team.png";
import HrMentor from "../assets/Hr Mentor.png";
import MaterForex from "../assets/MaterForex.png";
import Sellikemercury from "../assets/Sellikemercury.png";
import Todesktop from "../assets/Todesktop.png";
import Vizineer from "../assets/Vizineer.png";

const items = [
  // Row 1 (Top Row)
  { img: BikeRental, top: "2%", left: "5%", rotate: "-6deg", width: "24vw" },
  { img: GravityTeam, top: "-4%", left: "32%", rotate: "3deg", width: "28vw" },
  { img: HrMentor, top: "3%", left: "63%", rotate: "-2deg", width: "30vw" },

  // Row 2 (Middle row - bigger)
  { img: MaterForex, top: "35%", left: "18%", rotate: "-4deg", width: "32vw" },
  { img: Sellikemercury, top: "38%", left: "52%", rotate: "5deg", width: "33vw" },

  // Row 3 (Bottom)
  { img: Todesktop, top: "68%", left: "15%", rotate: "-3deg", width: "30vw" },
  { img: Vizineer, top: "70%", left: "52%", rotate: "2deg", width: "32vw" },
];


const CollageSection = () => {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center bg-[#515050c7] ProjectsBanner mt-10 lg:mt-20">
      
      {/* Red glowing blurred background */}
  <div className="absolute inset-0 pointer-events-none z-[1]">
  {/* Soft diagonal gradient stripe */}
  <div className="absolute -rotate-[20deg] top-[-10%] left-[-20%] w-[180vw] h-[80vh] 
  bg-gradient-to-r from-[#3a0000] via-[#7a0a0a] to-transparent 
  opacity-[0.25] blur-[140px]"></div>

  {/* Soft hotspot glow 1 */}
  <div className="absolute top-[30%] left-[10%] w-[500px] h-[500px] 
  rounded-full bg-red-700 opacity-[0.13] blur-[200px]"></div>

  {/* Soft hotspot glow 2 */}
  <div className="absolute top-[60%] left-[55%] w-[400px] h-[400px] 
  rounded-full bg-red-500 opacity-[0.18] blur-[190px]"></div>
</div>


      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/95 to-transparent z-10"></div>

      <div className="relative w-[140%] md:w-[110%] h-[90%] z-20">
        {items.map((item, i) => (
          <motion.img
            key={i}
            src={item.img}
            style={{
              top: item.top,
              left: item.left,
              width: item.width,
              rotate: item.rotate,
            }}
            className="absolute rounded-xl shadow-xl cursor-pointer transition-all duration-500 hover:scale-110"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          />
        ))}
      </div>
    </section>
  );
};

export default CollageSection;
