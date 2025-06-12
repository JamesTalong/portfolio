import HomePage from "./(site)/homepage/HomePage";
import AboutMeCard from "./(site)/homepage/AboutMeCard";
import WhatIDoSection from "./(site)/homepage/WhatIDoSection";
import ClientCarousel from "./(site)/homepage/ClientCarousel";

export default function Home() {
  return (
    <div>
      <HomePage />
      <ClientCarousel />
      <WhatIDoSection />
      <AboutMeCard />
    </div>
  );
}
