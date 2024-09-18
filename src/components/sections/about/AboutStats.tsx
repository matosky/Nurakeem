import Container from "@/components/layout/wrapper/Container";
import Image from "next/image";

export default function AboutStats() {
  return (
    <section className="w-full py-20 mt-20">
      <Container>
        <div className="container mx-auto">
          {/* Flexbox structure for cards */}
          <div className="flex flex-wrap gap-[15px] justify-center">
            {/* Card 1 */}
            <div className="bg-white mobile_lg:w-full flex-1 min-w-[300px] max-w-[400px] gap-3 flex items-center p-8 rounded-lg text-center border-2 border-formBorder border-dashed">
              <Image
                src="images/svg/about_card_one.svg"
                alt="icon"
                width={50}
                height={50}
              />
              <div className="flex flex-col items-start">
                <div className="text-3xl mobile_lg:text-2xl font-bold text-primary">200+</div>
                <p className="text-primary mobile_lg:text-sm text-left whitespace-nowrap mt-2">
                  Successful healthcare services
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white mobile_lg:w-full flex-1 min-w-[300px] max-w-[400px] gap-3 flex items-center p-8 rounded-lg text-center border-2 border-formBorder border-dashed">
              <Image
                src="images/svg/about_card_two.svg"
                alt="icon"
                width={50}
                height={50}
              />
              <div className="flex flex-col items-start">
                <div className="text-3xl mobile_lg:text-2xl font-bold text-primary">100%</div>
                <p className="text-primary mobile_lg:text-sm text-left whitespace-nowrap mt-2">
                  Our Satisfied Clients
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white mobile_lg:w-full flex-1 min-w-[300px] max-w-[400px] gap-3 flex items-center p-8 rounded-lg text-center border-2 border-formBorder border-dashed">
              <Image
                src="images/svg/about_card_three.svg"
                alt="icon"
                width={50}
                height={50}
              />
              <div className="flex flex-col items-start">
                <div className="text-3xl mobile_lg:text-2xl font-bold text-primary">5</div>
                <p className="text-primary mobile_lg:text-sm text-left whitespace-nowrap mt-2">
                  Total Award Won
                </p>
              </div>
            </div>
          </div>

          <div className="flex mt-[15px] flex-wrap gap-[15px] justify-center">
              <div className="bg-white mobile_lg:hidden mobile_lg:w-full flex-1 min-w-[300px] max-w-[400px] gap-3 flex items-center p-8 rounded-lg text-center" />
              <div className="bg-white mobile_lg:w-full flex-1 min-w-[300px] max-w-[400px] gap-3 flex items-center p-8 rounded-lg text-center border-2 border-formBorder border-dashed">
                <Image
                  src="images/svg/about_card_four.svg"
                  alt="icon"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col items-start">
                  <div className="text-3xl mobile_lg:text-2xl font-bold text-primary">30</div>
                  <p className="text-primary mobile_lg:text-sm text-left whitespace-nowrap mt-2">
                    Professional Workers
                  </p>
                </div>
              </div>
              <div className="bg-white mobile_lg:hidden mobile_lg:w-full flex-1 min-w-[300px] max-w-[400px] gap-3 flex items-center p-8 rounded-lg text-center" />
            </div>
        </div>
      </Container>
    </section>
  );
}
