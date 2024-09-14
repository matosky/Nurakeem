import Button from "../../ui/button/Button";

export default function ServicesHero() {
  return (
    <section
      id="hero"
      className="relative  w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/service_hero.png')" }}
    >
      {/* Overlay */}
      <div className="absolute hero-overlay"></div>

      {/* Content */}
      <div className="relative  z-10 flex items-center justify-center h-full w-full">
        <div className="flex  flex-col items-start justify-center h-full  text-left text-white max-w-[75%]">
          <div>
            <p className="text-nurakeemYellowColor text-center max-w-[400px] font-medium text-lg">
              Health & social , cleaning, Entertainment, <br /> social event management
            </p>
            <h1 className="text-6xl text-center font-bold mt-4 tracking-wide leading-tight font-lora">
              Our Services
            </h1>
          </div>
          <div className="mt-14 w-full flex justify-center items-center">
            <Button transBg  rounded="rounded-[40px]">
              Book a Meeting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
