"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What services does Nurakeem Services offer?",
    answer:
      "Nurakeem Services provides Health and Social Care, Cleaning, Entertainment, Social Event Management, Retail, and Restaurant services.",
  },
  {
    question: "Are your cleaning products eco-friendly?",
    answer:
      "Yes, we use eco-friendly and non-toxic cleaning products to ensure a safe and healthy environment for our clients.",
  },
  {
    question: "What type of health and social care services do you provide?",
    answer:
      "We offer a range of health and social care services, including personal care, companionship, and specialized medical support, tailored to each client’s needs.",
  },
  {
    question:
      "Can you customize event management services according to my needs?",
    answer:
      "Absolutely! We tailor our event management services to meet your specific needs and preferences, ensuring a memorable experience.",
  },
  {
    question: "How can I book a service with Nurakeem?",
    answer:
      "You can book a service by contacting us through our website's contact form, calling our customer service number, or visiting our office.",
  },
];

const Faq = () => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  // Toggle function to handle multiple open FAQs
  const toggleFaq = (index: number) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index)); // Remove from active if clicked again
    } else {
      setActiveIndexes([...activeIndexes, index]); // Add to active if clicked
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-formBorderColor px-4 rounded-lg px-2"
          >
            <div
              className={`w-full ${
                activeIndexes.includes(index) ? `border-b border-formBorderColor` : ``
              } text-left py-4 flex justify-between items-center text-primary`}
              onClick={() => toggleFaq(index)}
            >
              <h4 className="font-bold font-6xl max-w-[fit-content]  mobile_lg:text-sm">{faq.question}</h4>
              <div
                className={`w-[35px] min-w-[35px]  h-[35px] flex items-center justify-center text-primary rounded-full bg-primary transform transition-transform ${
                  activeIndexes.includes(index) ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg
                  width="24"  // Explicitly set the width
                  height="24" // Explicitly set the height
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            {activeIndexes.includes(index) && (
              <p className="py-4 bg-white text-primary">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
