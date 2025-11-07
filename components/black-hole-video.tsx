"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function BlackHoleVideo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (theme !== "dark") return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-x-0 top-0 h-[700px] pointer-events-none z-[-2] overflow-hidden"
    >
      <video
        src="/blackhole.mp4"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] lg:w-full lg:h-[700px] object-cover opacity-70"
        autoPlay
        loop
        muted
        playsInline
      />
    </motion.div>
  );
}
