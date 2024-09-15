import Container from "@/components/layout/wrapper/Container";
import Button from "../../ui/button/Button";

export default function AboutHero() {
  return (
    <section
      id="hero"
      className="relative mt-[-70px] w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/about_hero.png')" }}
    >
      {/* Overlay */}
      <div className="absolute hero-overlay"></div>

      {/* Content */}
      <div className="relative  z-10 flex items-center justify-center h-full w-full">
        <Container height="full">
          <div className="flex  flex-col items-start justify-center h-full  text-left text-white">
            <div>
              <p className="text-nurakeemYellowColor font-medium text-lg">
                Please know About Us
              </p>
              <h1 className="text-6xl font-bold mt-4 tracking-wide leading-tight font-lora">
                Your Trusted Partner in Comprehensive Care and Quality Services
              </h1>
            </div>
            <div className="mt-14">
              <Button transBg rounded="rounded-[40px]">
                Work with us Today
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
