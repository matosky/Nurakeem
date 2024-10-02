"use client";
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
    img: "/images/s3.png", // Updated the duplicate img path for this card.
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
    <section className="mt-10 mb-40 w-full">
      <div className="tablet_min:hidden big_screen:block">
        <div className="my-10 w-full border-t border-dashed border-formBorderColor" />
        <Container>
          <div className="grid grid-cols-2 gap-8 mobile_lg:grid-cols-1 tablet_min:grid-cols-2">
            <div className="max-w-[100%] mx-auto bg-white rounded-lg overflow-hidden">
              <div className="relative h-80">
                <Image
                  className="object-cover w-full h-full"
                  src={cards[0].img}
                  alt={`${cards[0].title} Image`}
                  layout="fill"
                  objectFit="cover" // Ensures proper scaling and cropping
                  loading="lazy" // Lazy loading to improve performance
                />
              </div>
              <div className="p-6">
                <h5 className="text-xl font-semibold text-center text-primary mb-2">
                  {cards[0].title}
                </h5>
                <p className="text-center text-primary">{cards[0].descr}</p>
              </div>
            </div>
            <div className="max-w-[100%] mx-auto bg-white rounded-lg overflow-hidden">
              <div className="relative h-80">
                <Image
                  className="object-cover w-full h-full"
                  src={cards[1].img}
                  alt={`${cards[1].title} Image`}
                  layout="fill"
                  objectFit="cover" // Ensures proper scaling and cropping
                  loading="lazy" // Lazy loading to improve performance
                />
              </div>
              <div className="p-6">
                <h5 className="text-xl font-semibold text-center text-primary mb-2">
                  {cards[1].title}
                </h5>
                <p className="text-center text-gray-600">{cards[1].descr}</p>
              </div>
            </div>
          </div>
        </Container>

        <div className="my-10 w-full border-t border-dashed border-formBorderColor" />
        <Container>
          <div className="grid grid-cols-2 gap-8 mobile_lg:grid-cols-1 tablet_min:grid-cols-2">
            <div className="max-w-[100%] mx-auto bg-white rounded-lg overflow-hidden">
              <div className="relative h-80">
                <Image
                  className="object-cover w-full h-full"
                  src={cards[2].img}
                  alt={`${cards[2].title} Image`}
                  layout="fill"
                  objectFit="cover" // Ensures proper scaling and cropping
                  loading="lazy" // Lazy loading to improve performance
                />
              </div>
              <div className="p-6">
                <h5 className="text-xl font-semibold text-center text-primary mb-2">
                  {cards[2].title}
                </h5>
                <p className="text-center text-primary">{cards[2].descr}</p>
              </div>
            </div>
            <div className="max-w-[100%] mx-auto bg-white rounded-lg overflow-hidden">
              <div className="relative h-80">
                <Image
                  className="object-cover w-full h-full"
                  src={cards[3].img}
                  alt={`${cards[3].title} Image`}
                  layout="fill"
                  objectFit="cover" // Ensures proper scaling and cropping
                  loading="lazy" // Lazy loading to improve performance
                />
              </div>
              <div className="p-6">
                <h5 className="text-xl font-semibold text-center text-primary mb-2">
                  {cards[3].title}
                </h5>
                <p className="text-center text-gray-600">{cards[3].descr}</p>
              </div>
            </div>
          </div>
        </Container>

        <div className="my-10 w-full border-t border-dashed border-formBorderColor" />
        <Container>
          <div className="grid grid-cols-2 gap-8 mobile_lg:grid-cols-1 tablet_min:grid-cols-2">
            <div className="max-w-[100%] mx-auto bg-white rounded-lg overflow-hidden">
              <div className="relative h-80">
                <Image
                  className="object-cover w-full h-full"
                  src={cards[4].img}
                  alt={`${cards[4].title} Image`}
                  layout="fill"
                  objectFit="cover" // Ensures proper scaling and cropping
                  loading="lazy" // Lazy loading to improve performance
                />
              </div>
              <div className="p-6">
                <h5 className="text-xl font-semibold text-center text-primary mb-2">
                  {cards[4].title}
                </h5>
                <p className="text-center text-primary">{cards[4].descr}</p>
              </div>
            </div>
            <div className="max-w-[100%] mx-auto bg-white rounded-lg overflow-hidden">
              <div className="relative h-80">
                <Image
                  className="object-cover w-full h-full"
                  src={cards[5].img}
                  alt={`${cards[5].title} Image`}
                  layout="fill"
                  objectFit="cover" // Ensures proper scaling and cropping
                  loading="lazy" // Lazy loading to improve performance
                />
              </div>
              <div className="p-6">
                <h5 className="text-xl font-semibold text-center text-primary mb-2">
                  {cards[5].title}
                </h5>
                <p className="text-center text-primary">{cards[5].descr}</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="tablet_min:block big_screen:hidden">
        {[1, 2, 3, 4, 5, 6].map((card, index) => {
          return (
            <div key={index}>
              <div className="my-10 w-full border-t border-dashed border-formBorderColor" />
              <Container>
                <div className="grid grid-cols-1 gap-8 mobile_lg:grid-cols-1 tablet_min:grid-cols-2">
                  <div className="max-w-[100%] mx-auto bg-white rounded-lg overflow-hidden">
                    <div className="relative h-80">
                      <Image
                        className="object-cover w-full h-full"
                        src={cards[index].img}
                        alt={`${cards[index].title} Image`}
                        layout="fill"
                        objectFit="cover" // Ensures proper scaling and cropping
                        loading="lazy" // Lazy loading to improve performance
                      />
                    </div>
                    <div className="p-6">
                      <h5 className="text-xl font-semibold text-center text-primary mb-2">
                        {cards[index].title}
                      </h5>
                      <p className="text-center text-primary">
                        {cards[index].descr}
                      </p>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          );
        })}
      </div>
    </section>
  );
}
