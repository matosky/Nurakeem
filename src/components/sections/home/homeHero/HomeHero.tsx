"use client"
import Image from 'next/image';
import Container from "@/components/layout/wrapper/Container";
import Button from "../../../ui/button/Button";
import { useEffect, useState } from "react";

export default function HomeHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-screen h-screen bg-cover bg-center"
    >
      {/* Background Image */}
      <Image
        src="/images/home_hero.png"
        alt="Home Hero"
        layout="fill"
        objectFit="cover"
        priority // Ensures it's loaded early
        quality={75} // Adjust quality to balance load and clarity
        className="absolute"
      />

      {/* Overlay */}
      <div className="absolute hero-overlay"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <Container height="full">
          <div className="flex flex-col items-start justify-center h-full text-left text-white">
            {/* Your content here */}
            <div>
              {/* First paragraph */}
              <p
                className={`${
                  isVisible ? 'animate-slideFromTop' : 'opacity-0'
                } text-nurakeemYellowColor font-medium text-xl`}
              >
                No one Cares Better than the Professional Cares
              </p>

              {/* Heading */}
              <h1
                className={`${
                  isVisible ? 'animate-slideFromLeft' : 'opacity-0'
                } text-6xl font-bold mt-4`}
              >
                Comprehensive Services for your Health, Home, and Happiness
              </h1>

              {/* Second paragraph */}
              <p
                className={`${
                  isVisible ? 'animate-slideFromBottom' : 'opacity-0'
                } mt-4 text-xl`}
              >
                From Healthcare to Entertainment, We Provide all the Services you Need
              </p>
            </div>

            {/* Button */}
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
