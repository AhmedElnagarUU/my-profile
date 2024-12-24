"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Bubble = ({ delay }: { delay: number }) => {
  const size = Math.random() * 100 + 50;
  const duration = Math.random() * 10 + 10;
  
  return (
    <motion.div
      className="absolute rounded-full bg-purple-600/10 backdrop-blur-3xl"
      style={{
        width: size,
        height: size,
        left: `${Math.random() * 100}%`,
      }}
      initial={{ y: "100vh", opacity: 0 }}
      animate={{
        y: "-100vh",
        opacity: [0, 1, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
    />
  );
};

export const AnimatedBackground = () => {
  const [bubbles, setBubbles] = useState<number[]>([]);

  useEffect(() => {
    setBubbles(Array.from({ length: 10 }, (_, i) => i * 2));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020817]">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
      {bubbles.map((delay, index) => (
        <Bubble key={index} delay={delay} />
      ))}
    </div>
  );
};