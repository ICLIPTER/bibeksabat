"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, TargetAndTransition, Easing } from "framer-motion";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

// Define easings as typed constants
const easeInOut: Easing = [0.42, 0, 0.58, 1]; // typical ease-in-out cubic-bezier

// Page transition variants with proper types
const pageVariants: { [key: string]: TargetAndTransition } = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, ease: easeInOut },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: easeInOut },
  },
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const scrollElements = document.querySelectorAll("[data-scroll]");
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      document.documentElement.style.scrollBehavior = "";
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} initial="initial" animate="animate" exit="exit" variants={pageVariants}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
