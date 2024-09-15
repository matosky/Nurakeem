
export default function FaqHero() {
  return (
    <section
      id="hero"
      className="relative w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/faq_hero.png')" }}
    >
      {/* Overlay */}
      <div className="absolute hero-overlay"></div>

      {/* Content */}
      <div className="relative  z-10 flex items-center justify-center h-full w-full">
        <div className="flex  flex-col items-start justify-center h-full  text-left text-white max-w-[75%]">
          <div>
            <p className="text-nurakeemYellowColor font-medium text-lg">
              Our FAQS
            </p>
            <h1 className="text-6xl font-bold mt-4 tracking-wide leading-tight font-lora">
              Got a question
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
