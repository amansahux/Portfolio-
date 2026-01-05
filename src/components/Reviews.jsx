import React, { useRef } from "react";

const reviews = [
  {
    name: "Natalia",
    img: "https://i.pravatar.cc/100?img=31",
    text: "Work with was extraordinary! He turned out to be a very competent and responsible specialist. The projects were completed on time and the result exceeded my expectations.",
  },
  {
    name: "Dmytro",
    img: "https://i.pravatar.cc/100?img=15",
    text: "I have the honor to recommend him as an exceptional professional in his field. His knowledge and expertise are undeniable.",
  },
  {
    name: "Anna",
    img: "https://i.pravatar.cc/100?img=10",
    text: "The developed project impresses with its quality and efficiency. The code is clearly written and functionality exceeds expectations.",
  },
  {
    name: "Iveta",
    img: "https://i.pravatar.cc/100?img=28",
    text: "Thanks for the excellent work! I recommend him to everyone looking for someone reliable in development.",
  },
  {
    name: "Michael",
    img: "https://i.pravatar.cc/100?img=5",
    text: "Amazing communication and delivery. Would definitely work again.",
  },
];

const Reviews = () => {
  const scrollRef = useRef(null);

  const scrollNext = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };
  return (
    <section className="w-full py-20 bg-[#0f0f0f] text-white">
      <h3 className="text-sm tracking-wider text-gray-400 mb-6 ml-6">
        REVIEWS
      </h3>

      {/* Scroll Wrapper */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 no-scrollbar"
      >
        <div className="flex gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="snap-start shrink-0 rounded-xl border border-white/10 bg-[#161616] p-6 w-[90%] sm:w-[48%] lg:w-[23%] transition-all"
            >
              <img
                src={r.img}
                className="w-12 h-12 rounded-full object-cover mb-4"
                alt=""
              />
              <h4 className="font-semibold mb-2">{r.name}</h4>
              <p className="text-sm text-gray-300 leading-6">{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={scrollPrev}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/20"
        >
          ←
        </button>
        <button
          onClick={scrollNext}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/20"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Reviews;
