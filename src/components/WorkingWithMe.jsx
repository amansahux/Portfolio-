import React from "react";
import { memo } from "react";
import { motion } from "framer-motion";
import { User, Bell, PenTool, Hourglass } from "lucide-react";

const cardsData = [
  {
    icon: <User size={24} />,
    title: "Learning Mindset",
    desc: "I’m continuously improving my skills in frontend development by building real projects, experimenting with UI ideas, and learning modern tools every day.",
  },
  {
    icon: <Bell size={24} />,
    title: "Clear Communication",
    desc: "Whether collaborating or working independently, I communicate clearly, ask the right questions, and stay open to feedback to improve both work and workflow.",
  },
  {
    icon: <PenTool size={24} />,
    title: "Design Sense",
    desc: "I care about spacing, typography, alignment and how a website feels. I turn UI designs into clean, responsive and user-friendly web experiences.",
  },
  {
    icon: <Hourglass size={24} />,
    title: "Consistency & Discipline",
    desc: "Even as a fresher, I prioritize completing tasks on time and maintaining code quality without rushing. I believe consistency builds skill !  not shortcuts.",
  },
];


// Motion Variants
const parentVariant = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const childVariant = {
  hidden: { opacity: 0, },
  show: {
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const WorkingWithME = ({ onContactClick }) => {
  return (
    <section className="Benifits font-[Urbanist]">
     
      
        <div className=" Benifits-Cards w-full px-[5vw]  pt-20 py-10  text-white max-w-[1400px] mx-auto">
           <div className="Heading  ">
        <h3 className="text-xl uppercase text-[#fafafaad] pb-5">
          Benefits of working with me
        </h3>
      </div>
          <motion.div
            variants={parentVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 "
          >
            {cardsData.map((item, i) => (
              <motion.div
                key={i}
                variants={childVariant}
                className="bg-[#242424] rounded-2xl p-7 lg:max-w-[600px] flex flex-col gap-4 border border-transparent transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#ff3b3b] text-white flex items-center justify-center ">
                  {item.icon}
                </div>

                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-[15px] text-gray-300 leading-[22px] ">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
           <div className="Btn mt-10">
          <button onClick={onContactClick} className=" bg-white text-black hover:text-white font-medium hover:bg-[#ff4b4b]  rounded-full transition-all cursor-pointer py-[18px] px-[36px]">Book Your Strategy Call Now</button>
        </div>
        </div>
       
    </section>
  );
};

export default WorkingWithME;
