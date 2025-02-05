import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      setDisplayText("");
      setCurrentIndex(0);
    }
  }, [inView]);

  useEffect(() => {
    if (inView && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 35);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, inView]);

  return (
    <p
      ref={ref}
      className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
    >
      {displayText}
      <span className="animate-blink">|</span>
    </p>
  );
};

export default TypewriterText;
