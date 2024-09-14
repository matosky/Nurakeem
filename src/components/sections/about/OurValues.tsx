import Container from "@/components/layout/wrapper/Container";
import Image from "next/image";

export default function OurValues() {
  return (
    <section className="w-full py-10 mt-20  bg-nurakeemblueBG">
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
            Our Values
          </h2>
          <p className="text-base font-normal text-white leading-[35px] text-center">
            Client Centricity, Quality, Innovation, Leadership
          </p>
        </div>
      </Container>
    </section>
  );
}
