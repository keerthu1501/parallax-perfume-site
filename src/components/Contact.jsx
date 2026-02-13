import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* Floating bottle movements (different depth speeds) */
  const bottle1Y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const bottle2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const bottle3Y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bottle4Y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[200vh] bg-black text-white pt-28 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black"></div>

      {/* Gold Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-yellow-400/10 blur-[150px] rounded-full"></div>

      {/* Floating Bottles */}
      <motion.img
        style={{ y: bottle1Y }}
        src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80"
        className="absolute top-20 left-10 w-28 md:w-40 opacity-70"
        alt="Floating perfume"
      />

      <motion.img
        style={{ y: bottle2Y }}
        src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=600&q=80"
        className="absolute top-1/2 right-10 w-24 md:w-36 opacity-60"
        alt="Floating perfume"
      />

      <motion.img
        style={{ y: bottle3Y }}
        src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"
        className="absolute bottom-40 left-1/3 w-32 md:w-44 opacity-50"
        alt="Floating perfume"
      />

      <motion.img
        style={{ y: bottle4Y }}
        src="https://images.unsplash.com/photo-1536859355447-3a93f9c21a58?auto=format&fit=crop&w=600&q=80"
        className="absolute bottom-10 right-1/4 w-28 md:w-40 opacity-60"
        alt="Floating perfume"
      />

      {/* Center Glass Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-16 shadow-[0_0_60px_rgba(255,215,0,0.08)]"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-center text-yellow-400 mb-10 tracking-[0.2em]">
            Connect With LUXE
          </h2>

          <form className="space-y-8">
            
            <div className="relative">
              <input
                type="text"
                required
                className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-yellow-400 transition"
                placeholder="Your Name"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                required
                className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-yellow-400 transition"
                placeholder="Your Email"
              />
            </div>

            <div className="relative">
              <textarea
                rows="4"
                required
                className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-yellow-400 transition resize-none"
                placeholder="Your Message"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 border border-yellow-400 text-yellow-400 tracking-widest hover:bg-yellow-400 hover:text-black transition duration-500"
            >
              Send Message
            </motion.button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
