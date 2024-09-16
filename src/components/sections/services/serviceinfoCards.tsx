import Container from "@/components/layout/wrapper/Container";
import Image from "next/image";

const cards = [
  {
    img: "/images/s1.png",
    title: "Health and Social Care",
    descr:
      "Our compassionate and professional team provides personalized health and social care services, ensuring the well-being and comfort of our clients.",
  },
  {
    img: "/images/s2.png",
    title: "Supported Living Accommodation",
    descr:
      "We provide an accommodation which enables each person to develop new skills and live increasingly fulfilled and independent lives.",
  },
  {
    img: "/images/s2.png", // Updated the duplicate img path for this card.
    title: "Healthcare Training",
    descr:
      "Our Healthcare Training offers key skills and practical knowledge to excel in patient care and succeed in healthcare roles.",
  },
  {
    img: "/images/s4.png",
    title: "Restaurant",
    descr:
      "Enjoy exquisite dining with Mazees restaurant services, featuring a variety of delicious Afro/Caribbean dishes.",
  },
  {
    img: "/images/s5.png",
    title: "Cleaning",
    descr:
      "We offer reliable and thorough cleaning services for homes and businesses, using eco-friendly products to create spotless and healthy environments.",
  },
  {
    img: "/images/s6.png",
    title: "Entertainment",
    descr:
      "From planning events to providing entertainment options, we make sure your leisure time is enjoyable and memorable.",
  },
];

export default function ServiceInfoCards() {
  return (
    <section className="mt-40 mb-40 w-full">
      <Container>
        <div className="grid grid-cols-2 gap-8 mobile_lg:grid-cols-1 tablet_min:grid-cols-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className="max-w-[100%] mx-auto bg-white rounded-lg overflow-hidden"
            >
              <div className="relative h-80">
                <Image
                  className="object-cover w-full h-full"
                  src={card.img}
                  alt={`${card.title} Image`}
                  layout="fill"
                  objectFit="cover" // Ensures proper scaling and cropping
                  quality={75} // Optimizes image loading without compromising quality
                  loading="lazy" // Lazy loading to improve performance
                />
              </div>
              <div className="p-6">
                <h5 className="text-xl font-semibold text-center text-primary mb-2">
                  {card.title}
                </h5>
                <p className="text-center text-gray-600">{card.descr}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
