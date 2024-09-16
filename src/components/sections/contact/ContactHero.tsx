
export default function ContactHero() {
  return (
    <section
      id="hero"
      className="relative  w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/contact_hero.png')" }}
    >
      {/* Overlay */}
      <div className="absolute hero-overlay"></div>

      {/* Content */}
      <div className="relative  z-10 flex items-center justify-center h-full w-full">
        <div className="flex  flex-col items-start justify-center h-full  text-left text-white max-w-[75%]">
          <div>
            <p className="text-nurakeemYellowColor text-center font-medium text-xl desktop_sm:text-lg tablet_max:text-lg tablet_md:text-lg tablet_min:text-base mobile_lg:text-sm mobile_md:text-xs">
              Please know About Us
            </p>
            <h1 className="text-6xl text-center desktop_sm:text-5xl tablet_max:text-5xl tablet_md:text-4xl tablet_min:text-4xl mobile_lg:text-3xl mobile_md:text-2xl font-bold mt-4 tracking-wide leading-tight font-lora">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
