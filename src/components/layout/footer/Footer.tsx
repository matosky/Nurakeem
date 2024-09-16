"use client"
import NuraLogo from "@/components/ui/icons/nuraLogo";
import Container from "../wrapper/Container";
import FacebookIcon from "@/components/ui/icons/FacebookIcon";
import TwitterIcon from "@/components/ui/icons/TwitterIcon";
import InstagramIcon from "@/components/ui/icons/IntagramIcon";
import LinkedInIcon from "@/components/ui/icons/LinkedInIcon";
import { FaPhone } from "react-icons/fa6";
import Image from "next/image";

const services = [
  { text: "Health & Social care Services" },
  { text: "Entertainment" },
  { text: "Social event Management" },
  { text: "Retail & Restaurant" },
  { text: "Cleaning" },
];

const socials = [
  { icon: <FacebookIcon /> },
  { icon: <TwitterIcon /> },
  { icon: <InstagramIcon /> },
  { icon: <LinkedInIcon /> },
];

function Footer() {
  // Function to handle smooth scroll to top
  const handleScrollToTop = () => {
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-nurakeemFooterBg relative  pt-6 pb-10">
      <Container>
        <section className="tablet_md:flex-col tablet_md:justify-start tablet_md:items-start flex justify-between tablet_md:space-x-0 tablet_md:space-y-12 space-x-12  py-10">
          <div className="flex-1">
            <h2 className="text-customLightGreen text-[24px] font-lora font-semibold leading-[30.72px] mb-4">
              <NuraLogo />
            </h2>
            <p className="text-white font-normal leading-[30px] text-left">
              Nurakeem Services offers comprehensive solutions including Health
              and Social Care, professional Cleaning, Entertainment, Event
              Management, Retail, and Restaurant services. We are dedicated to
              delivering top-notch, reliable, and personalized services to
              enhance your quality of life.
            </p>
          </div>

          <div className="flex-1">
            <h2 className="text-customLightGreen text-[24px] font-lora font-semibold leading-[30.72px] text-left mb-4">
              Our Services
            </h2>
            <div className="text-white">
              {services.map((s, index) => (
                <div key={index} className="flex items-center mb-4 gap-2">
                  <span className="w-5 h-5 bg-customLightGreen rounded-full"></span>
                  <span className="font-normal uppercase leading-[30px] text-left">
                    {s.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-customLightGreen text-[24px] font-lora font-semibold leading-[30.72px] text-left mb-4">
              Contact
            </h2>
            <div className="text-white">
              <p className="font-normal leading-[30px] text-left">
                LONDON / ESSEX:
                <br />
                6 Edgehill Gardens, Dagenham
                <br />
                ESSEX RM10 7LB
              </p>
              <p className="font-normal leading-[30px] text-left mt-4">
                Tel: 020 3774 2766
                <br />
                <span className="text-nurakeemYellowColor">
                  services@nurakeems.com
                </span>
                <br />
                info@nurakeems.com
              </p>

              <h3 className="text-customLightGreen text-[20px] font-lora font-semibold leading-[30.72px] text-left mb-4 mt-4">
                Hours:
              </h3>
              <p className="font-normal leading-[30px] text-left">
                Mon - Fri: 9AM - 5PM
                <br />
                Sat & Sun: 10AM - 4PM
              </p>

              <p className="font-normal leading-[30px] text-left mt-4">
                <span className="font-bold flex items-center gap-1">
                  <FaPhone className="mt-[-4px] text-white" /> 07904451016
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ...divider... */}
      </Container>
      <div className="w-full opacity-20 my-10 border border-dividerBorder" />
      <section>
        <Container>
          <div>
            <p className="w-full mobile_sm:text-center  tablet_md:text-left text-center mb-4 font-normal leading-[43px]">
              Copyright &copy; 2024 Nurakeem Services | All Rights Reserved
            </p>
            <div className=" flex w-[fit-content]  mx-auto items-center gap-4">
              {socials.map((s, index) => {
                return <span key={index}>{s.icon}</span>;
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Scroll to top button with smooth scroll behavior */}
      <div
        className="absolute mobile_lg:top-[-5%] right-[10%] top-[-10%] cursor-pointer"
        onClick={handleScrollToTop}
      >
        <Image
          src="images/svg/top.svg"
          width={45}
          height={45}
          alt="icon"
        />
      </div>
    </footer>
  );
}

export default Footer;
