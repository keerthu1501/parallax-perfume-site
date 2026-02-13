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
          src="https://olgaperfume.com/cdn/shop/files/Sovaze_graphic_v3.jpg?v=1704456366&width=1946"
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
      alt="Art-incredeient" style={{ padding: "12px" }}/>

    
    <div>
      <h2 style={{ marginBottom: "12px", marginTop: "52px", paddingLeft: "16px" }} className="text-5xl md:text-6xl font-serif mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        The Art of Ingredients
      </h2>

      <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-lg" style={{ padding: "22px" }} >
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
