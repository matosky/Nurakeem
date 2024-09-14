"use client"; // This marks the component as a client component

import { useState } from "react";
import Container from "@/components/layout/wrapper/Container";
import FormInput from "@/components/ui/formInput/FormInput";
import Button from "@/components/ui/button/Button";

export default function ContactForm() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address1: "",
    address2: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="py-20">
      <Container>
        <h2 className="text-[24px] font-lora font-sem ibold leading-[30.72px] text-center text-primary mb-4">
          Book a Meeting
        </h2>
        <div className="text-primary">
          <p className="text-base font-normal leading-[35px] text-center">
            Please fill out the form below to be added to our customer list
          </p>
        </div>
        <form className="w-[60%] mx-auto">
          <div>
            <FormInput
              label="First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              handleInputChange={handleInputChange}
            />
          </div>
          <div>
            <FormInput
              label="Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
              handleInputChange={handleInputChange}
            />
          </div>
          <div>
            <FormInput
              label="Phone Number"
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              handleInputChange={handleInputChange}
            />
          </div>
          <div>
            <FormInput
              label="Email"
              type="text"
              name="email"
              value={formData.email}
              handleInputChange={handleInputChange}
            />
          </div>
          <div>
            <FormInput
              label="Address (1)"
              type="text"
              name="address1"
              value={formData.address1}
              handleInputChange={handleInputChange}
            />
          </div>
          <div>
            <FormInput
              label="Address2"
              type="text"
              name="address2"
              value={formData.address2}
              handleInputChange={handleInputChange}
            />
          </div>
          <div>
            <FormInput
              label="Message"
              type="textarea"
              name="message"
              value={formData.message}
              handleInputChange={handleInputChange}
              rows={5} // Additional textarea attributes
            />
          </div>

          <div className="mt-6">
            <button
              className={`py-3 rounded-[40px] block px-10 bg-thickBtnBg font-normal  text-white transition-all flex items-center ease-in-out delay-150`}
            >
              Submit Now
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}
