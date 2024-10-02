import AboutHero from "@/components/sections/about/AboutHero";
import AboutInfo from "@/components/sections/about/AboutInfo";
import AboutStats from "@/components/sections/about/AboutStats";
import OurValues from "@/components/sections/about/OurValues";
import Professionalism from "@/components/sections/about/Professionalism";
import AboutVison from "@/components/sections/about/Vision";
import RootLayout from "../layout";

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutInfo />
      <AboutStats />
      <OurValues />
      <Professionalism />
      <AboutVison />
    </>
  );
}
