import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export const Section = ({ children, className = "" }: SectionProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    controls.start(inView ? "show" : "hidden");
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export { container, item };
