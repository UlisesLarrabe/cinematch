import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral justify-center items-center w-full">
      <Hero />
      <HowItWorks />
    </main>
  );
}
