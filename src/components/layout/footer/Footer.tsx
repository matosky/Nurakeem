"use client";
import NuraLogo from "@/components/ui/icons/nuraLogo";
import Container from "../wrapper/Container";
import FacebookIcon from "@/components/ui/icons/FacebookIcon";
import InstagramIcon from "@/components/ui/icons/IntagramIcon";
import { FaPhone } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react"; // Import React hooks

const services = [
  { text: "Health & Social care Services" },
  { text: "Entertainment" },
  { text: "Social event Management" },
  { text: "Retail & Restaurant" },
  { text: "Cleaning" },
];

const socials = [
  {
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/profile.php?id=100031368097614&mibextid=ZbWKwL", // Example Facebook handle
  },
  {
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/nura.keem", // Example Instagram handle
  },
];

function Footer() {
  // State to handle the visibility of the scroll to top button
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Function to handle smooth scroll to top
  const handleScrollToTop = () => {
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to track scroll position and detect hero section visibility
  const handleScroll = () => {
    const heroSections = document.querySelectorAll(".hero-section");
    let shouldShowButton = true; // Default to showing the button if no hero section is found

    // Check if any hero section is in view
    heroSections.forEach((hero) => {
      const heroRect = hero.getBoundingClientRect();
      if (heroRect.bottom > 0) {
        shouldShowButton = false; // If any hero section is visible, hide the button
      }
    });

    setShowScrollToTop(shouldShowButton); // Show the button only if no hero section is visible
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="bg-nurakeemFooterBg relative pt-6 pb-10">
      <Container>
        <section className="tablet_md:flex-col tablet_md:justify-start tablet_md:items-start flex justify-between tablet_md:space-x-0 tablet_md:space-y-12 space-x-20 py-8">
          <div className="flex-1">
            <h2 className="text-customLightGreen text-[20px] font-lora font-semibold leading-[28px] mb-4">
              <NuraLogo />
            </h2>
            <p className="text-white text-sm font-normal leading-[24px] text-left">
              Nurakeem Services offers comprehensive solutions including Health
              and Social Care, professional Cleaning, Entertainment, Event
              Management, Retail, and Restaurant services. We are dedicated to
              delivering top-notch, reliable, and personalized services to
              enhance your quality of life.
            </p>
          </div>

          <div className="flex-1 max-w-[fit-content] flex flex-col items-center">
            <h2 className="text-customLightGreen text-[20px] w-full font-lora font-semibold leading-[28px] text-left mb-4">
              Our Services
            </h2>
            <div className="text-white">
              {services.map((s, index) => (
                <div key={index} className="flex items-center mb-3 gap-2">
                  <span className="w-3 h-3 bg-customLightGreen rounded-full"></span>
                  <span className="text-sm font-normal uppercase leading-[24px] text-left">
                    {s.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-customLightGreen text-[20px] font-lora font-semibold leading-[28px] text-left mb-4">
              Contact
            </h2>
            <div className="text-white">
              <p className="text-sm font-normal leading-[24px] text-left">
                LONDON / ESSEX:
                <br />
                6 Edgehill Gardens, Dagenham
                <br />
                ESSEX RM10 7LB
              </p>
              <p className="text-sm font-normal leading-[24px] text-left mt-4">
                Tel: 020 3774 2766
                <br />
                <span className="text-nurakeemYellowColor">
                  services@nurakeems.com
                </span>
                <br />
                info@nurakeems.com
              </p>

              <h3 className="text-customLightGreen text-[18px] font-lora font-semibold leading-[24px] text-left mb-4 mt-4">
                Hours:
              </h3>
              <p className="text-sm font-normal leading-[24px] text-left">
                Mon - Fri: 9AM - 5PM
                <br />
                Sat & Sun: 10AM - 4PM
              </p>

              <p className="text-sm font-normal leading-[24px] text-left mt-4">
                <span className="font-bold flex items-center gap-1">
                  <FaPhone className="mt-[-4px] text-white" /> 07904451016
                </span>
              </p>
            </div>
          </div>
        </section>
      </Container>
      <div className="w-full opacity-20 my-8 border border-dividerBorder" />
      <section>
        <Container>
          <div>
            <p className="w-full mobile_sm:text-center tablet_md:text-left text-center mb-4 text-sm font-normal leading-[24px]">
              Copyright &copy; 2024 Nurakeem Services | All rights reserved |
              Designed by:&nbsp;
              <a
                className="text-nurakeemYellowColor"
                href="mailto:benedictugwechi@gmail.com"
              >
                benedictugwechi@gmail.com
              </a>
            </p>
            <div className="flex justify-center items-center gap-4">
              {socials.map((s, index) => (
                <Link
                  key={index}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 text-white hover:text-customLightGreen transition-colors duration-300"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Scroll to top button with smooth scroll behavior */}
      {showScrollToTop && (
        <div
          className="fixed bottom-[10%] right-[10%] cursor-pointer"
          onClick={handleScrollToTop}
        >
          <Image src="images/svg/top.svg" width={45} height={45} alt="icon" />
        </div>
      )}
    </footer>
  );
}

export default Footer;
