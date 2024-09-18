import Container from "@/components/layout/wrapper/Container";
import Image from "next/image";

const profs = [
  { text: "Serve as the benchmark for delivery of rehabilitation services" },
  {
    text: "Uphold the industry regulations and standards as set by law and regulatory bodies",
  },
  {
    text: "Endeavour to satisfy all stakeholders (clients, staff, service purchasers, etc.)",
  },
  {
    text: "Maintain a staff development program responsive to the dynamic skills requirements the service dictates",
  },
];
export default function Professionalism() {
  return (
    <section className="w-full py-8  bg-nurakeemdarkBlueBG">
      <Container>
        <div className="">
          <Image
            className="mb-4 mx-auto"
            src="images/svg/check.svg"
            width="50"
            height="50"
            alt="icon"
          />
          <h2 className="text-[24px] font-lora font-sem ibold leading-[30.72px] text-center text-white mb-4">
            Professionalism
          </h2>
          <div className="text-primary">
            {profs.map((pt, index) => {
              return (
                <div key={index} className="flex  mobile_lg:items-start items-center gap-4">
                  <span className="w-4 min-w-4 min-h-4 mt-2 h-4 bg-white rounded-full"></span>
                  <span className="text-base  text-white font-normal mobile_lg:leading-[30px] leading-[43px] text-left">
                    {pt.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
