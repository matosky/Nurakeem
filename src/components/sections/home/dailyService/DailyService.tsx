import Container from "@/components/layout/wrapper/Container";

const services = [
  { name: "Hygiene assistance" },
  { name: "Laundry" },
  { name: "Cleaning" },
  { name: "Shopping" },
  { name: "Domestic errands" },
  { name: "Medication reminders" },
  { name: "Healthcare training" },
];
export default function DailyService() {
  return (
    <section className="bg-white mt-10 mb-40">
      <Container>
        <h2 className="text-[24px] font-lora font-semibold leading-[30.72px] text-left text-primary mb-4">
          Daily or weekly services include:
        </h2>
        <div className="text-primary">
          {services.map((s, index) => {
            return (
              <div key={index} className="flex items-center gap-4">
                <span className="custom-list-item"></span>
                <span className="text-base font-normal leading-[43px] text-left">{s.name}</span>
              </div>
            );
          })}
        </div>
        <p className="text-primary  font-normal leading-[43px] text-left">
          Whether you need short-term recovery assistance or long-term care,
          please give us a call.
        </p>
      </Container>
    </section>
  );
}
