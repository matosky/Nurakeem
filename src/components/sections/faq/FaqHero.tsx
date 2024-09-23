import Container from "@/components/layout/wrapper/Container";
import Image from "next/image";

export default function FaqHero() {
  return (
    <section
      id="hero"
      className="hero-section relative w-screen h-screen mobile_lg:h-[40vh] bg-cover bg-center"
    >
      {/* Optimized Background Image */}
      <Image
        src="/images/faq_hero.png"
        alt="FAQ Hero"
        layout="fill"
        objectFit="cover"
        objectPosition="center" // Ensures the image is centered
        priority // Ensures the image is loaded quickly
        className="absolute"
      />

      {/* Overlay */}
      <div className="absolute hero-overlay"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <Container height="full">
          <div className="flex flex-col mobile_lg:w-full items-start justify-center h-full text-left text-white">
            <div className="flex flex-col mobile_lg:w-full justify-start items-start gap-[5px]">
              <p
                className={`text-nurakeemYellowColor mobile_lg:w-full mobile_lg:text-center font-medium text-xl desktop_sm:text-lg tablet_max:text-lg tablet_md:text-lg tablet_min:text-base mobile_lg:text-sm mobile_md:text-xs`}
              >
                Our FAQS
              </p>
              <h1
                className={`text-6xl mobile_lg:w-full desktop_sm:text-5xl mobile_lg:text-center tablet_max:text-5xl tablet_md:text-4xl tablet_min:text-4xl mobile_lg:text-3xl mobile_md:text-2xl font-bold  leading-tight font-lora`}
              >
                Got a Question
              </h1>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
