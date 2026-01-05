import { useRef } from "react";

export const useScramble = () => {
  const Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const scramble = (element) => {
    let interval = null; // 👉 NOW interval is local per call

    clearInterval(interval);

    const originalText = element.dataset.value;
    let iteration = 0;

    interval = setInterval(() => {
      element.innerText = originalText
        .split("")
        .map((char, index) => {
          if (index < iteration) return originalText[index];
          return Characters[Math.floor(Math.random() * Characters.length)];
        })
        .join("");

      iteration += 0.33;

      if (iteration >= originalText.length) {
        clearInterval(interval);
        element.innerText = originalText;
      }
    }, 30);
  };

  return scramble;
};
