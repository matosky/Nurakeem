import Container from "@/components/layout/wrapper/Container";

export default function Care() {
  return (
    <section className="bg-white mt-20">
      <Container>
        <h2 className="text-[24px] font-lora font-semibold leading-[30.72px] text-left text-primary mb-4">
          Personal, In-Home Care for Services Users
        </h2>
        <div className="text-primary">
          <p className="text-base font-normal leading-[43px] text-left">
            At Nurakeem, our goal is to help our clients achieve the best
            quality of life possible. We understand that one solution does not
            fit every situation so we take the time to listen and learn about
            each client's needs and preferences. This enables us to tailor a
            care program that maximizes the client's independence and dignity.
          </p>
          <p className="text-base font-normal leading-[43px] text-left my-4">
            Our mission is to develop services that encourage, empower and
            enable a climate of informed choices, enhancing the capacity of
            clients to function independently in their community. To fully
            commit in the building of community that is characterised by
            understanding and acceptance of those with Mental Health and any
            form of disability especially Adult and Elderly.
          </p>
          <p className="text-base font-normal leading-[43px] text-left">
            Understandably, most Clients prefer to stay in the familiar comfort
            of their own homes. This is more doable than you may think. We can
            arrange for medical and non-medical visits from Home Aides.
          </p>
        </div>
      </Container>
    </section>
  );
}
