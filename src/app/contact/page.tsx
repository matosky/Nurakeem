import Addresses from "@/components/sections/contact/Addresses";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/Form";
import RootLayout from "../layout";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <Addresses />
      <ContactForm />
    </>
  );
}
