import Container from "@/components/layout/wrapper/Container";
import Faq from "@/components/ui/faq/Faq";

export default function FaqSection() {
  return (
    <section className="mt-20 mb-20">
      <Container>
        <section className="my-10">
          <div>
            <p className="text-nurakeemYellowColor text-center font-medium text-lg">
              We know you have many questions about Nurakeem <br /> Services, so
              we&#39;ve tried our best to answer them.
            </p>
            <h2 className="text-[24px] font-lora font-semibold leading-[30.72px] text-center mt-4 text-primary mb-4">
              Nurakeem&#39;s Service FAQS
            </h2>
          </div>
        </section>
      </Container>

      <section className="w-full bg-white">
        <Container>
          <div className="">
            <Faq />
          </div>
        </Container>
      </section>
    </section>
  );
}
