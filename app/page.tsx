import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { PainSection } from "@/components/PainSection";
import { CarrierCoverage } from "@/components/CarrierCoverage";
import { HowItWorks } from "@/components/HowItWorks";
import { Statement } from "@/components/Statement";
import { ReturnBand } from "@/components/ReturnBand";
import { WhoFor } from "@/components/WhoFor";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PainSection />
        <CarrierCoverage />
        <HowItWorks />
        <Statement />
        <ReturnBand />
        <WhoFor />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
