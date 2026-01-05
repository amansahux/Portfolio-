import React from "react";

const SeeProjectBtn = ({ name, theme }) => {
  return (
    <button
      className={`cursor-pointer whitespace-nowrap flex justify-center items-center text-lg border w-fit rounded-full py-2 px-6  transition-all duration-200 ${
        theme === "red"
          ? "bg-[#ff3b3b] text-white hover:bg-[#ff3b3b]/85"
          : "bg-[white] text-black hover:bg-[#ff3b3b] hover:text-white"
      }`}
    >
      {name}
    </button>
  );
};

export default SeeProjectBtn;
