import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "CineMatch",
    url: "https://cinematch.fun",
    description:
      "El Tinder de las películas. Crea una sala compartida, elige plataformas de streaming, desliza y haz match con amigos o pareja para decidir qué película ver sin discusiones.",
    applicationCategory: "EntertainmentApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires HTML5 and JavaScript",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex flex-col min-h-screen bg-neutral justify-center items-center w-full">
        <Hero />
        <HowItWorks />
      </main>
    </>
  );
}