import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CinematicSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity1 = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.img
          style={{ scale }}
          src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Perfume"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center max-w-3xl px-6">
          <motion.h2 style={{ opacity: opacity1 }} className="text-5xl font-serif mb-8">
            Crafted with Precision
          </motion.h2>

          <motion.p style={{ opacity: opacity2 }} className="text-lg text-gray-300 mb-8">
            Rare ingredients sourced globally and blended to perfection.
          </motion.p>

          <motion.h3 style={{ opacity: opacity3 }} className="text-4xl text-yellow-400">
            Experience Timeless Luxury
          </motion.h3>
        </div>
      </div>
    </section>
  );
}
