import Image from "next/image";
import Container from "@/components/layout/wrapper/Container";
import Button from "../../ui/button/Button";

export default function AboutHero() {
  return (
    <section id="hero" className="hero-section relative mt-[-70px] w-screen h-screen mobile_lg:h-[80vh] bg-cover bg-center">
      {/* Optimized Background Image */}
      <Image
        src="/images/about_hero.png"
        alt="About Hero"
        layout="fill"
        objectFit="cover"
        objectPosition="center" // Ensures the image is centered
        priority // Ensures it loads quickly
        className="absolute"
      />

      {/* Overlay */}
      <div className="absolute hero-overlay"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <Container height="full">
          <div className="flex flex-col items-start justify-center h-full text-left text-white">
            <div className="flex flex-col justify-start items-start gap-[5px]">
              <p className="text-nurakeemYellowColor font-medium text-xl desktop_sm:text-lg tablet_max:text-lg tablet_md:text-lg tablet_min:text-base mobile_lg:text-sm mobile_md:text-xs">
                Please know About Us
              </p>
              <h1 className="text-6xl desktop_sm:text-5xl tablet_max:text-5xl tablet_md:text-4xl tablet_min:text-4xl mobile_lg:text-3xl mobile_md:text-2xl font-bold  leading-tight font-lora">
                Your Trusted Partner in Comprehensive Care and Quality Services
              </h1>
            </div>
            <div className="mt-[35px]">
              <Button href="/contact" transBg rounded="rounded-[40px]">
                Work with us Today
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
