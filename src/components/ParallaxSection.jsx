export default function ParallaxSection() {
  return (
    <section
      className="h-[80vh] bg-fixed bg-center bg-cover flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1601049676869-702ea24cfd58')",
      }}
    >
      <h2 className="text-5xl font-serif tracking-widest bg-black/50 px-10 py-4">
        Feel the Sensation
      </h2>
    </section>
  );
}
