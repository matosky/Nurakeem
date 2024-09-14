import Care from "@/components/sections/home/care/Care";
import DailyService from "@/components/sections/home/dailyService/DailyService";
import HomeHero from "@/components/sections/home/homeHero/HomeHero";

export default function Home() {
  return (
  <div>
    <HomeHero />
    <Care />
    <DailyService />
  </div>
  );
}
