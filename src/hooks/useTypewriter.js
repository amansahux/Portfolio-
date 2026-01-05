import { useState, useEffect } from "react";

export const useTypewriter = (text, speed = 90, delay = 1200) => {
  const [result, setResult] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const isCompleted = result === text; // 👈 Track complete state

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!deleting) {
        setResult(text.substring(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === text.length) {
          setTimeout(() => setDeleting(true), delay);
        }
      } else {
        setResult(text.substring(0, index - 1));
        setIndex(index - 1);

        if (index - 1 === 0) {
          setDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [index, deleting]);

  return { result, isCompleted }; // return both
};
