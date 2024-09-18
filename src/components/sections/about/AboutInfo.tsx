import Container from "@/components/layout/wrapper/Container";

export default function AboutInfo() {
  return (
    <section className="bg-white mt-20">
      <Container>
        <div>
          <h2
            className="text-2xl font-lora font-semibold leading-tight text-left text-primary mb-4
  big_screen:text-3xl
  desktop:text-2xl
  tablet_min:text-xl
  mobile_lg:text-lg
  mobile_sm:text-base
  mobile_xs:text-sm"
          >
            About Us
          </h2>

          <div className="text-primary">
            <p className="text-base font-normal mobile_lg:leading-[30px] leading-[40px] text-left">
              <strong>Nurakeem Services</strong> is registered and regulated by
              the Care Quality Commission (CQC) and commissioned by the London
              Borough of Barking and Dagenham (LBBD). <br /> Our mission is to
              develop services that encourage, empower, and enable a climate of
              informed choices, enhancing the capacity of clients to function
              independently in their community. To fully commit to building a
              community that is characterised by understanding and acceptance of
              those with Social Health needs.
              <br /> Quality is paramount in the Nurakeem Care philosophy -
              which is helping position the company as one of the most respected
              Health and Social Care providers. It&#39;s a benchmark that
              extends into every one of the services we provide - from the
              highest standards of care practice offered to clients to the depth
              of experience and training of staff.
            </p>
            <p className="text-base font-normal mobile_lg:leading-[30px] leading-[40px] text-left my-4">
              <strong>Angy Homes,</strong> a subsidiary of Nurakeem Services,
              provides specialist support for Adults with Learning, Mental
              Health, and Autism-related support needs. Through our therapeutic
              and personalised pathway approach, we provide accommodations that
              enable each person to develop new skills and live increasingly
              fulfilled and independent lives. <br /> Each individual within our
              supported living homes has their own unique and personalised plan,
              reflecting their needs and aspirations. The plan is produced with
              the involvement of the individual concerned, key support team,
              external professionals, and family/friends who are the key people
              in their lives. <br /> Listening and reflecting are two of the
              most important elements in providing high quality care and
              support. Each day, we listen to the people we support and respond
              as appropriate. We reflect with them and other key people in their
              lives to provide positive outcomes. By adopting a strong listening
              and reflective culture, we ensure each person is respected and
              feels at the heart of every decision within their lives and how
              they choose to live.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
