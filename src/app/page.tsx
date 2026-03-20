import Hero from "@/components/hero";
import MoreInfoSection from "@/components/more-info-section";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral justify-center items-center w-full">
      <Hero />
      <MoreInfoSection />
    </main>
  );
}
