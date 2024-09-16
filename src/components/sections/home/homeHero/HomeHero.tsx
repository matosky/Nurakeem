"use client";
import Container from "@/components/layout/wrapper/Container";
import Button from "../../../ui/button/Button";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomeHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations when the component is mounted
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  return (
    <section id="hero" className="relative w-screen h-screen bg-cover bg-center">
      {/* Optimized Background Image */}
      <Image
        src="/images/home_hero.png"
        alt="Home Hero"
        layout="fill"
        objectFit="cover"
        priority // Ensures it's loaded early
        className="absolute"
      />

      {/* Overlay */}
      <div className="absolute hero-overlay"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <Container height="full">
          <div className="flex flex-col items-start justify-center h-full text-left text-white">
            <div>
              {/* First paragraph: slides from top */}
              <p
                className={`${
                  isVisible ? 'animate-slideFromTop' : 'opacity-0'
                } text-nurakeemYellowColor font-medium text-xl desktop_sm:text-lg tablet_max:text-lg tablet_md:text-lg tablet_min:text-base mobile_lg:text-sm mobile_md:text-xs`}
              >
                No one Cares Better than the Professional Cares
              </p>

              {/* Heading: slides from left */}
              <h1
                className={`${
                  isVisible ? 'animate-slideFromLeft' : 'opacity-0'
                } text-6xl desktop_sm:text-5xl tablet_max:text-5xl tablet_md:text-4xl tablet_min:text-4xl mobile_lg:text-3xl mobile_md:text-2xl font-bold mt-4 tracking-wide leading-tight font-lora`}
              >
                Comprehensive Services for your Health, Home, and Happiness
              </h1>

              {/* Second paragraph: slides from bottom */}
              <p
                className={`${
                  isVisible ? 'animate-slideFromBottom' : 'opacity-0'
                } mt-4 text-xl desktop_sm:text-lg tablet_max:text-lg tablet_md:text-lg tablet_min:text-base mobile_lg:text-sm mobile_md:text-xs`}
              >
                From Healthcare to Entertainment, We Provide all the Services
                you Need
              </p>
            </div>

            {/* Button: slides from bottom */}
            <div
              className={`${
                isVisible ? 'animate-slideFromBottom' : 'opacity-0'
              } mt-14`}
            >
              <Button href="/services" transBg rounded="rounded-[40px]">
                Explore our Services
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
