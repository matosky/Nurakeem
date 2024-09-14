import Button from "../../../ui/button/Button";

export default function HomeHero() {
  return (
    <section
      id="hero"
      className="relative w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/home_hero.png')" }}
    >
      {/* Overlay */}
      <div className="absolute hero-overlay"></div>

      {/* Content */}
      <div className="relative  z-10 flex items-center justify-center h-full w-full">
        <div className="flex  flex-col items-start justify-center h-full  text-left text-white max-w-[75%]">
          <div>
            <p className="text-nurakeemYellowColor font-medium text-lg">
              No one Cares Better than the Professional Cares
            </p>
            <h1 className="text-6xl font-bold mt-4 tracking-wide leading-tight font-lora">
              Comprehensive Services for your Health, Home, and Happiness
            </h1>

            <p className="mt-4 text-lg">
              From Healthcare to Entertainment, We Provide all the Services you
              Need
            </p>
          </div>
          <div className="mt-14">
            <Button transBg rounded="rounded-[40px]">
              Explore our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
