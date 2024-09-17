import Container from "@/components/layout/wrapper/Container";

export default function Addresses() {
  return (
    <section className="mt-20">
      <Container>
        <section className="my-10">
          <div>
            <p className="text-nurakeemYellowColor  text-center font-medium text-lg">
              Contact us today to get started with our <br /> Best services
            </p>
            <h2 className="text-[24px] font-lora font-sem ibold leading-[30.72px] text-center mt-4 text-primary mb-4">
              Get In Touch With Us
            </h2>
          </div>
        </section>
      </Container>
      <section className="w-full bg-nurakeemGrayBg py-20">
        <Container>
          {/* Flex container for the cards */}
          <div className="flex flex-row tablet_min:flex-col justify-between mobile_lg:gap-[10px] gap-[86px]">
            {/* Column 1: Visit our Office */}
            <div className="flex-1">
              <h2 className="text-white whitespace-nowrap bg-customLightGreen py-2 px-6 text-[24px] font-lora font-semibold leading-[30.72px] text-left mb-4">
                Visit our Office
              </h2>
              <div className="font-normal text-primary px-6 leading-[30px] text-left">
                <p>
                  <strong>LONDON / ESSEX:</strong> 6 Edgehill Gardens Dagenham
                  RM10 7LB
                </p>
              </div>
            </div>

            {/* Column 2: 24/7 Quick Contact */}
            <div className="flex-1">
              <h2 className="text-white whitespace-nowrap bg-customLightGreen py-2 px-6 text-[24px] font-lora font-semibold leading-[30.72px] text-left mb-4">
                24/7 Quick Contact
              </h2>
              <div className="flex text-primary px-6 flex-col gap-2 items-start">
                <span>
                  <strong>Phone: </strong> 020 3774 2766
                </span>
                <span>
                  <strong>Email: </strong> Services@nurakeems.com <br/>or
                  Info@nurakeems.com
                </span>
                <span>
                  <strong>WhatsApp: </strong> 07904451016
                </span>
              </div>
            </div>

            {/* Column 3: Working Hours */}
            <div className="flex-1">
              <h2 className="text-white whitespace-nowrap bg-customLightGreen py-2 px-6 text-[24px] font-lora font-semibold leading-[30.72px] text-left mb-4">
                Working Hours
              </h2>
              <div className="flex text-primary px-6 flex-col gap-2 items-start">
                <span>
                  <strong>Mon - Fri:</strong> 9.00AM to 5.00PM
                </span>
                <span>
                  <strong>Saturday:</strong> 10.00AM to 5.00PM
                </span>
                <span>
                  <strong>Sunday:</strong> 12AM to 4.00PM
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </section>
  );
}
