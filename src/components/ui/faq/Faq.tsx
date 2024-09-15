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
  const [activeIndex, setActiveIndex] = useState<number | null>();

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-formBorderColor rounded-lg px-2"
          >
            <button
              className={`w-full ${
                (activeIndex !== null && activeIndex===index) ? `border-b border-formBorderColor` : ``
              } text-left p-4 flex justify-between items-center text-gray-700 font-medium`}
              onClick={() => toggleFaq(index)}
            >
              <span>{faq.question}</span>
              <div
              className={`w-8 h-8 py-2 px-2 text-primary  rounded-[50%] bg-primary transform transition-transform ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
              >
                <svg
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
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-white text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
