import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const navigate = useNavigate();

  // HERO
  const heroRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroBottleRef = useRef(null);
  const heroTextRef = useRef(null);

  // CINEMATIC SCENE
  const scene1Ref = useRef(null);
  const scene2Ref = useRef(null);
const sideImgRef = useRef(null);


  // COLLECTION
  const collectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  // ================= HERO PARALLAX =================
  useGSAP(() => {
    if (!heroRef.current) return;

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress;

        gsap.to(heroBgRef.current, {
          yPercent: -20 * progress,
          scale: 1.15,
          ease: "none",
        });

        gsap.to(heroBottleRef.current, {
          yPercent: 40 * progress,
          rotation: 180 * progress,
          scale: 1 + 0.3 * progress,
          ease: "power2.out",
        });

        gsap.to(heroTextRef.current, {
          yPercent: 30 * progress,
          opacity: 1 - progress,
          ease: "none",
        });
      },
    });
  }, []);

  // ================= CINEMATIC SECTION =================
  useGSAP(() => {
    if (!scene1Ref.current) return;

    const title = scene1Ref.current.querySelector(".cinematic-title");
    const text = scene1Ref.current.querySelector(".cinematic-text");

    gsap.timeline({
      scrollTrigger: {
        trigger: scene1Ref.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    })
      .fromTo(
        title,
        { scale: 2, opacity: 0 },
        { scale: 1, opacity: 1, ease: "power3.out" }
      )
      .fromTo(
        text,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.3"
      );
  }, []);

  
  useGSAP(() => {
  if (!scene2Ref.current) return;

  const bottles = scene2Ref.current.querySelectorAll(".floating-bottle");

  bottles.forEach((bottle, index) => {
    gsap.to(bottle, {
      y: -100,
      rotation: index % 2 === 0 ? 15 : -15,
      ease: "none",
      scrollTrigger: {
        trigger: scene2Ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  gsap.from(sideImgRef.current, {
    x: -120,
    opacity: 0,
    duration: 1.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sideImgRef.current,
      start: "top 80%",
    },
  });
});


  // ================= COLLECTION ANIMATION =================
  useGSAP(() => {
    if (!collectionRef.current) return;

    gsap.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
      },
    });

    cardsRef.current.forEach((card) => {
      if (!card) return;

      gsap.from(card, {
        y: 120,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
      });
    });
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden bg-black flex items-center justify-center"
      >
        <img
          ref={heroBgRef}
          src="data:image/jpeg;base64,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"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Luxury background"
        />

        <img
          ref={heroBottleRef}
          src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=90"
          className="absolute bottom-24 right-20 w-48 md:w-72 drop-shadow-2xl"
          alt="Bottle"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div
          ref={heroTextRef}
          className="relative z-20 text-center text-white px-6"
        >
          <h1 className="text-7xl md:text-9xl font-serif tracking-[0.3em] mb-8 bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
            LUXE
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10">
            Where fragrance becomes identity
          </p>

          <button
            onClick={() => navigate("/collection")}
            className="px-12 py-4 border border-yellow-400 text-yellow-400 tracking-widest hover:bg-yellow-400 hover:text-black transition duration-500"
          >
            Explore Collection
          </button>
        </div>
      </section>

      {/* ================= CINEMATIC SECTION ================= */}
      <section
        ref={scene1Ref}
  className="relative h-screen bg-neutral-950 text-white flex flex-col items-center justify-center text-center px-6"
      >
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-6">
          <h2 className="cinematic-title text-5xl md:text-8xl font-serif mb-6">
            Crafting Timeless Luxury
          </h2>

          <p className="cinematic-text text-lg md:text-xl text-gray-300 max-w-2xl">
            Every bottle tells a story - a blend of elegance, mystery, and
            identity.
          </p>
        </div>
      </section>


      {/* ================= FLOATING BOTTLES + SIDE PARALLAX ================= */}
<section
  ref={scene2Ref}
  className="relative py-40 bg-gradient-to-b from-black to-neutral-900 overflow-hidden"
>
  {/* Floating Bottles */}
  <div className="absolute inset-0 pointer-events-none">
    <img
      className="floating-bottle absolute top-20 left-10 w-20 opacity-60 rotate-12"
      src="https://images.unsplash.com/photo-1721116253189-a98836f297e0?w=500"
      alt=""
    />
    <img
      className="floating-bottle absolute top-40 right-20 w-28 opacity-70 -rotate-6"
      src="https://images.unsplash.com/photo-1721116253189-a98836f297e0?w=500"
      alt=""
    />
    <img
      className="floating-bottle absolute bottom-32 left-1/4 w-24 opacity-50 rotate-3"
      src="https://images.unsplash.com/photo-1721116253189-a98836f297e0?w=500"
      alt=""
    />
    <img
      className="floating-bottle absolute bottom-20 right-1/3 w-32 opacity-65 -rotate-9"
      src="https://images.unsplash.com/photo-1721116253189-a98836f297e0?w=500"
      alt=""
    />
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 gap-20 items-center relative z-10 m-auto">
    {/* Image */}
    <img
      ref={sideImgRef}
      src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=90"
      className="w-full h-[500px] md:h-[600px] object-cover rounded-3xl shadow-2xl"
      alt=""
    />

    {/* Text */}
    <div>
      <h2 className="pb-3 text-5xl md:text-6xl font-serif mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        The Art of Ingredients
      </h2>

      <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-lg">
        Top notes dance, heart notes embrace, base notes endure.
        <br className="hidden md:inline" />
        <span className="text-yellow-400 italic font-serif mb-10">
          {" "}A symphony for your soul.
        </span>
      </p>

      <button
        onClick={() => navigate("/collection")}
        className="mb-5 px-10 py-4 border-2 border-yellow-400 text-yellow-400 tracking-widest hover:bg-yellow-400 hover:text-black transition duration-500"
      >
        Begin Your Journey
      </button>
    </div>
  </div>
</section>


      {/* ================= COLLECTION SECTION ================= */}
<section
  ref={collectionRef}
  className="relative py-32 bg-gradient-to-b from-black to-neutral-900 text-white"
>
  <div className="max-w-7xl mx-auto px-6">
    <h2
      ref={titleRef}
      className="text-5xl md:text-2xl font-serif text-center mb-9 pb-12"
    >
      Our Signature Collection
    </h2>

    <div className="grid md:grid-cols-3 gap-16">
      {[
        {
          name: "Midnight Oud",
          img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
        },
        {
          name: "Golden Amber",
          img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539",
        },
        {
          name: "Velvet Rose",
          img: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D",
        },
      ].map((product, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="group bg-neutral-800 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-4 transition duration-700"
        >
          <img
            src={product.img}
            alt=""
            className="w-full h-96 object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="p-8 text-center">
            <h3 className="text-2xl font-serif mb-4">
              {product.name}
            </h3>

            <button
              onClick={() => navigate("/collection")}
              className="px-8 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition duration-500"
            >
              Explore
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ================= FINAL CTA ================= */}
      <section className="min-h-screen bg-black flex flex-col items-center justify-center text-center text-white px-6">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-serif mb-10 bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent"
        >
          Define Your Presence
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/collection")}
          className="px-16 py-6 bg-yellow-400 text-black font-serif tracking-[0.2em] hover:shadow-yellow-500/40 transition duration-500"
        >
          Discover Now
        </motion.button>
      </section>
    </>
  );
}
