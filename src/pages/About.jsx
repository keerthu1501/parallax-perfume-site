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
          src="https://images.unsplash.com/photo-1615634262417-2d6b4e46a1b8?auto=format&fit=crop&w=1200&q=90"
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
