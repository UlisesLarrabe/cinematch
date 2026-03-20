"use client";

import { useEffect, useState } from "react";
import { Provider } from "@/types/provider.type";
import ProviderCard from "@/components/provider-card";

export default function ConfigureRoom({
  providersSelected,
  setProvidersSelected,
}: {
  providersSelected: number[];
  setProvidersSelected: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [showMore, setShowMore] = useState(false);

  const handleGetProviders = async () => {
    try {
      const res = await fetch("/api/providers");
      if (!res.ok) {
        throw new Error("Error al obtener los proveedores");
      }
      const data = await res.json();
      setProviders(data.results);
    } catch (error) {
      console.error("Error al obtener los proveedores:", error);
    }
  };

  useEffect(() => {
    handleGetProviders();
  }, []);
  return (
    <>
      <p className="text-lg font-semibold text-red-neutral">Paso 1:</p>
      <h2 className="text-4xl text-bold">
        Configurar la <span className="text-red-neutral">sala</span>
      </h2>
      <p className="text-gray-300">
        Selecciona los servicios a los que estas suscrito. Nosotros nos
        encargamos de filtrarlos para ti.
      </p>
      <div className="grid grid-cols-3 gap-6 mt-4">
        {providers.slice(0, 9).map((provider) => (
          <ProviderCard
            key={provider.provider_id}
            provider={provider}
            setProvidersSelected={setProvidersSelected}
            providersSelected={providersSelected}
          />
        ))}
        {showMore &&
          providers
            .slice(9)
            .map((provider) => (
              <ProviderCard
                key={provider.provider_id}
                provider={provider}
                setProvidersSelected={setProvidersSelected}
                providersSelected={providersSelected}
              />
            ))}
        <button
          className="col-span-3 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 hover:cursor-pointer"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Mostrar menos" : "Mostrar más"}
        </button>
      </div>
    </>
  );
}
