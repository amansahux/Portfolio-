import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    q: "What programming languages are most often used in your project?",
    a: "In frontend development today, there are many tools, frameworks, and technologies. I mainly work with HTML, CSS, JavaScript, and React! focusing on clean UI, smooth interactions, and modern frontend practices.",
  },
  {
    q: "How can I contact you?",
    a: "You can contact me via email, Contact number, or through the contact form available on Bottom.",
  },
  {
    q: "What are the deadlines for the project?",
    a: "Every project needs a different amount of time depending on features and complexity. I always discuss the timeline first so we’re on the same page before development starts..",
  },
  {
    q: "Do you provide advice or support?",
    a: "Yes, I provide support, improvements, and guidance when needed. My goal isn’t just to build the project, but also ensure it works smoothly after delivery.",
  },
  {
    q: "What payment methods do you accept?",
    a: "For now, I keep payments simple UPI (GPay, PhonePe, Paytm) or direct bank transfer.",
  },
  {
    q: "What does the process look like from idea to implementation?",
    a: "First, we discuss the idea and requirements. Once everything is clear, I begin development and share progress. After feedback and revisions, the final version is delivered.",
  },
];

const FAQs = () => {
  const [open, setOpen] = useState(null);
  return (
    <section className="w-full  text-white px-4 md:px-8 lg:px-16 mt-20 py-10 font-[Poppins]">
      <div className="max-w-[1500px] mx-auto">
        <h2 className="text-xl mb-3 text-gray-200">FAQs</h2>

      <div className="flex gap-10">

  {/* LEFT STICKY TITLE */}
  <div className="Content hidden lg:flex whitespace-nowrap sticky top-30 h-max">
    <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-semibold">
      Let's Clear Your Doubts!
    </h2>
  </div>

  {/* RIGHT FAQ SCROLL SECTION */}
  <div className="FaqWrapper flex flex-col gap-5 w-full lg:overflow-y-auto lg:snap-y lg:snap-mandatory">

    {faqData.map((item, i) => (
      <motion.div
        key={i}
        layout
        onClick={() => setOpen(open === i ? null : i)}
        className="bg-[#1f1f1f] border border-[#333] rounded-xl p-6 cursor-pointer hover:bg-[#222] transition-all lg:snap-start"
      >
        {/* Top Row */}
        <div className="flex justify-between items-center">
          <h3 className="text-[16px] md:text-[18px] font-medium text-gray-200">
            {item.q}
          </h3>

          <motion.div
            animate={{ rotate: open === i ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="border border-gray-400 rounded-full p-2">
              <ChevronDown className="text-gray-300 w-6 h-6" />
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {open === i && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="text-[#fafafa8d] text-[14px] md:text-[15px] mt-4 leading-[22px]"
            >
              {item.a}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default FAQs;
