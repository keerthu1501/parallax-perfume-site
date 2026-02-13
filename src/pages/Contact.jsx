import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Perfect viewport centering
  });

  // Ultra-smooth spring parallax (Apple-style)
  const smoothScroll = useSpring(scrollYProgress, { 
    stiffness: 150, 
    damping: 30 
  });

  // Multi-layered depth parallax for 6 surrounding bottles
  const bottle1Y = useTransform(smoothScroll, [0, 1], ["0%", "45%"]);
  const bottle2Y = useTransform(smoothScroll, [0, 1], ["0%", "-40%"]);
  const bottle3Y = useTransform(smoothScroll, [0, 1], ["0%", "35%"]);
  const bottle4Y = useTransform(smoothScroll, [0, 1], ["0%", "-30%"]);
  const bottle5Y = useTransform(smoothScroll, [0, 1], ["5%", "50%"]);
  const bottle6Y = useTransform(smoothScroll, [0, 1], ["-5%", "-35%"]);

  // Subtle horizontal drift for realism
  const bottleX1 = useTransform(smoothScroll, [0, 1], ["0%", "-8%"]);
  const bottleX2 = useTransform(smoothScroll, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-black via-neutral-900/95 to-black text-white pt-32 pb-20 overflow-hidden"
    >
      {/* Luxe layered backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_70%_at_20%_30%,rgba(255,215,0,0.06),transparent)]" />
      
      {/* Golden ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-yellow-400/8 blur-[180px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 right-1/5 w-[400px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full" />

      {/* ========== SURROUNDING PERFUME BOTTLES (PARALLAX) ========== */}
      
      {/* Top-Left - Fast parallax */}
      <motion.img
        style={{ y: bottle1Y, x: bottleX1 }}
        src="https://images.unsplash.com/photo-1723391962154-8a2b6299bc09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlcmZ1bWUlMjAzZHxlbnwwfHwwfHx8MA%3D%3D"
        alt="Luxe perfume"
        className="absolute top-20 left-8 md:left-16 w-20 md:w-28 lg:w-36 opacity-85 -rotate-6 pointer-events-none z-5"
      />
      
      {/* Top-Right - Slow parallax */}
      <motion.img
        style={{ y: bottle2Y, x: bottleX2 }}
        src="https://images.unsplash.com/photo-1748480852876-47b508a0902d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHBlcmZ1bWUlMjBwbmd8ZW58MHx8MHx8fDA%3D"
        alt="Luxe perfume"
        className="absolute top-32 right-12 md:right-20 w-18 md:w-28 lg:w-36 opacity-80 rotate-4 pointer-events-none z-5"
      />
      
      
      {/* Right-Mid - Opposite direction */}
      <motion.img
        style={{ y: bottle4Y }}
        src="https://images.unsplash.com/photo-1643797517590-c44cb552ddcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlcmZ1bWUlMjBwbmd8ZW58MHx8MHx8fDA%3D"
        alt="Luxe perfume"
        className="absolute top-2/3 right-8 md:right-16 w-20 md:w-30 lg:w-38 opacity-80 -rotate-8 pointer-events-none z-5"
      />
      
      {/* Bottom-Left - Deep parallax */}
      <motion.img
        style={{ y: bottle5Y }}
        src="https://images.unsplash.com/photo-1723391962154-8a2b6299bc09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlcmZ1bWUlMjAzZHxlbnwwfHwwfHx8MA%3D%3D"
        alt="Luxe perfume"
        className="absolute bottom-32 left-10 md:left-18 w-18 md:w-28 lg:w-36 opacity-70 rotate-2 pointer-events-none z-5"
      />
      
      {/* Bottom-Right - Fast deep */}
     

      {/* ========== PERFECTLY CENTERED FORM ========== */}
      <div className="relative z-20 flex items-center justify-center min-h-[80vh] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, amount: 0.25 }}
          className="w-full max-w-2xl mx-auto bg-white/4 backdrop-blur-3xl border border-white/12 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl shadow-yellow-500/15"
        >
          {/* Premium Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-[0.3em] bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent mb-4">
              Contact LUXE
            </h2>
            <p className="text-gray-300 md:text-lg max-w-md mx-auto leading-relaxed">
              Begin your bespoke fragrance journey with our master perfumers
            </p>
          </motion.div>

          {/* Luxury Form */}
          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); console.log('Form submitted'); }}>
            {/* Name Field */}
            <div className="relative group">
              <input
                type="text"
                required
                className="w-full h-16 bg-transparent/30 border-b-2 border-white/25 py-4 text-xl text-white placeholder-transparent focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-500 peer"
                placeholder=" "
              />
              <label className="absolute left-0 top-4 text-gray-400 text-lg group-focus-within:-top-2 group-focus-within:text-yellow-400 group-focus-within:text-sm transition-all duration-500 peer-valid:-top-2 peer-valid:text-sm peer-valid:text-yellow-400">
                Full Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative group">
              <input
                type="email"
                required
                className="w-full h-16 bg-transparent/30 border-b-2 border-white/25 py-4 text-xl text-white placeholder-transparent focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-500 peer"
                placeholder=" "
              />
              <label className="absolute left-0 top-4 text-gray-400 text-lg group-focus-within:-top-2 group-focus-within:text-yellow-400 group-focus-within:text-sm transition-all duration-500 peer-valid:-top-2 peer-valid:text-sm peer-valid:text-yellow-400">
                Email Address
              </label>
            </div>

            {/* Message Field */}
            <div className="relative group">
              <textarea
                rows="5"
                required
                className="w-full bg-transparent/30 border-b-2 border-white/25 py-4 text-xl text-white placeholder-transparent focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-500 resize-none peer pr-4"
                placeholder=" "
              />
              <label className="absolute left-0 top-4 text-gray-400 text-lg group-focus-within:-top-2 group-focus-within:text-yellow-400 group-focus-within:text-sm transition-all duration-500 peer-valid:-top-2 peer-valid:text-sm peer-valid:text-yellow-400">
                Your Message / Fragrance Preferences
              </label>
            </div>

            {/* Premium Submit */}
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(255, 215, 0, 0.4)",
                backgroundColor: "rgba(255, 215, 0, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full h-16 border-2 border-yellow-400/60 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 backdrop-blur-sm rounded-2xl text-yellow-400 font-serif text-xl tracking-widest overflow-hidden transition-all duration-500 hover:border-yellow-300 hover:text-black"
            >
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
