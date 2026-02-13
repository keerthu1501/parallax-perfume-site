import { motion } from "framer-motion";

export default function Collection() {
  const items = [
    {
      name: "Midnight Rose",
      image:
        "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80",
      category: "Perfume",
    },
    {
      name: "Golden Aura",
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
      category: "Perfume",
    },
    {
      name: "Velvet Oud",
      image:
        "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D",
      category: "Perfume",
    },
    {
      name: "Royal Amber",
      image:
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=80",
      category: "Perfume",
    },
    {
      name: "Luxury Gift Box",
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=80",
      category: "Accessory",
    },
    {
      name: "Signature Travel Set",
      image:
        "https://images.unsplash.com/photo-1723391962154-8a2b6299bc09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D",
      category: "Accessory",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-24 px-6">
      <h2 className="text-4xl md:text-5xl text-center mb-16 font-serif tracking-[0.2em] text-gold">
        Our Collection
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative group overflow-hidden cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[380px] object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition duration-500">
              <h3 className="text-xl tracking-wider">{item.name}</h3>
              <p className="text-sm text-gold mt-2">
                {item.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
