"use client"; // Marks this component as a client component

import { useState } from "react";
import Container from "@/components/layout/wrapper/Container";
import FormInput from "@/components/ui/formInput/FormInput";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address1: "",
    address2: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<string | null>(null);

  // Handle input changes
  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus(null); // Reset form status
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Ensure formData is JSON
      });
  
      if (response.ok) {
        setFormStatus("Form submitted successfully!");
      } else {
        const errorData = await response.json();
        setFormStatus(`Failed to submit the form: ${errorData.message}`);
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setFormStatus("Failed to submit the form.");
    }
  };
  

  return (
    <section className="py-20" id="book-meeting">
      <Container>
        <h2 className="text-[24px] font-lora font-semibold leading-[30.72px] text-center text-primary mb-4">
          Book a Meeting
        </h2>
        <div className="text-primary">
          <p className="text-base font-normal leading-[30px] text-center">
            Please fill out the form below to be added to <br /> our customer list
          </p>
        </div>

        <form className="w-full max-w-[700px] mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col tablet_md:flex-row gap-4">
            <div className="w-full tablet_md:w-1/2">
              <FormInput
                label="First Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="w-full tablet_md:w-1/2">
              <FormInput
                label="Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mt-4">
            <FormInput
              label="Phone Number"
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              handleInputChange={handleInputChange}
            />
          </div>

          <div className="mt-4">
            <FormInput
              label="Email"
              type="text"
              name="email"
              value={formData.email}
              handleInputChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col tablet_md:flex-row gap-4 mt-4">
            <div className="w-full tablet_md:w-1/2">
              <FormInput
                label="Address (1)"
                type="text"
                name="address1"
                value={formData.address1}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="w-full tablet_md:w-1/2">
              <FormInput
                label="Address (2)"
                type="text"
                name="address2"
                value={formData.address2}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mt-4">
            <FormInput
              label="Message"
              type="textarea"
              name="message"
              value={formData.message}
              handleInputChange={handleInputChange}
              rows={5}
            />
          </div>

          <div className="mt-6 w-full">
            <button
              type="submit"
              className={`py-3 rounded-[40px] block px-10 bg-thickBtnBg font-normal text-white transition-all flex items-center justify-center ease-in-out delay-150`}
            >
              Submit Now
            </button>
          </div>
        </form>

        {formStatus && (
          <p className="mt-4 text-center text-primary">{formStatus}</p>
        )}
      </Container>
    </section>
  );
}
