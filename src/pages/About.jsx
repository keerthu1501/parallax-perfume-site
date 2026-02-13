import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const splitRef = useRef(null);

  /* ================= HERO PARALLAX ================= */
  useGSAP(() => {
    gsap.to(heroRef.current, {
      backgroundPositionY: "30%",
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  /* ================= IMAGE REVEAL ================= */
  useGSAP(() => {
    gsap.from(imageRef.current, {
      scale: 1.3,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
      },
    });
  }, []);

  /* ================= SPLIT SECTION PARALLAX ================= */
  useGSAP(() => {
    gsap.from(textRef.current, {
      x: -150,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: splitRef.current,
        start: "top 75%",
      },
    });

    gsap.from(splitRef.current.querySelector(".split-image"), {
      x: 150,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: splitRef.current,
        start: "top 75%",
      },
    });
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="h-screen flex items-center justify-center text-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=2000&q=90')",
        }}
      >
        <div className="bg-black/60 absolute inset-0" />

        <div className="relative z-10 px-6">
          <h1 className="text-6xl md:text-8xl font-serif mb-8 tracking-wide">
            About Our Legacy
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Where craftsmanship meets timeless elegance.
          </p>
        </div>
      </section>

      {/* ================= BRAND STORY ================= */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-serif mb-10">
          The Essence of Luxury
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Our journey began with a singular vision — to redefine fragrance
          as an experience, not just a scent. Every bottle we craft embodies
          precision, artistry, and emotion.
          <br /><br />
          From rare oud harvested in remote regions to delicate florals
          cultivated at dawn, each note is selected with devotion.
        </p>
      </section>

      {/* ================= PARALLAX IMAGE REVEAL ================= */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=2000&q=90"
          className="w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </section>

      {/* ================= SPLIT STORY SECTION ================= */}
      <section
        ref={splitRef}
        className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center"
      >
        <div ref={textRef}>
          <h2 className="text-5xl font-serif mb-8">
            Artistry in Every Drop
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Our master perfumers blend tradition with innovation.
            Each fragrance evolves gracefully on the skin —
            unveiling layers of character and depth.
            <br /><br />
            Luxury is not loud. It whispers confidence.
          </p>
        </div>

        <img
          className="split-image rounded-3xl shadow-[0_50px_120px_rgba(0,0,0,0.8)] object-cover h-[500px] w-full"
          src="data:image/webp;base64,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"
          alt=""
        />
      </section>

      {/* ================= FLOATING PARALLAX TEXT ================= */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <h2
          className="text-7xl md:text-9xl font-serif opacity-10 tracking-[0.3em]"
        >
          LUXE
        </h2>

        <p className="absolute text-xl md:text-2xl max-w-2xl text-gray-300">
          A fragrance that becomes your signature.
        </p>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 text-center">
        <h2 className="text-5xl font-serif mb-8">
          Discover Your Identity
        </h2>

        <button className="px-12 py-4 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition duration-500 tracking-widest">
          Explore Collection
        </button>
      </section>
    </div>
  );
}
