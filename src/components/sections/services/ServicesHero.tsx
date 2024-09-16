import Image from "next/image";
import Button from "../../ui/button/Button";

export default function ServicesHero() {
  return (
    <section id="hero" className="relative w-screen h-screen bg-cover bg-center">
      {/* Optimized Background Image */}
      <Image
        src="/images/service_hero.png"
        alt="Services Hero"
        layout="fill"
        objectFit="cover"
        priority // Ensure this image loads early
        quality={75} // Adjust quality to balance performance and clarity
        className="absolute"
      />

      {/* Overlay */}
      <div className="absolute hero-overlay"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <div className="flex flex-col items-start justify-center h-full text-left text-white max-w-[75%]">
          <div>
            <p className="text-nurakeemYellowColor text-center font-medium text-xl desktop_sm:text-lg tablet_max:text-lg tablet_md:text-lg tablet_min:text-base mobile_lg:text-sm mobile_md:text-xs">
              Health & social, cleaning, Entertainment, <br /> social event
              management
            </p>
            <h1 className="text-6xl text-center desktop_sm:text-5xl tablet_max:text-5xl tablet_md:text-4xl tablet_min:text-4xl mobile_lg:text-3xl mobile_md:text-2xl font-bold mt-4 tracking-wide leading-tight font-lora">
              Our Services
            </h1>
          </div>
          <div className="mt-14 w-full flex justify-center items-center">
            <Button href="/contact#book-meeting" transBg rounded="rounded-[40px]">
              Book a Meeting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
