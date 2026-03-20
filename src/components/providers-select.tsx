import React from "react";
import { Provider } from "@/types/provider.type";
import ProviderCard from "./provider-card";

const ProvidersSelect = ({
  providers,
  providersSelected,
  setProvidersSelected,
  showMoreProviders,
  setShowMoreProviders,
}: {
  providers: Provider[];
  providersSelected: number[];
  setProvidersSelected: React.Dispatch<React.SetStateAction<number[]>>;
  showMoreProviders: boolean;
  setShowMoreProviders: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <section>
      <p className="text-base md:text-lg font-semibold text-red-neutral">
        Paso 1:
      </p>
      <h2 className="text-3xl md:text-4xl font-bold">
        Servicios de <span className="text-red-neutral">Streaming</span>
      </h2>
      <p className="text-sm md:text-base text-gray-300 mt-2 max-w-3xl">
        Selecciona las plataformas que tienen disponibles.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mt-8">
        {providers.length === 0
          ? Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-2 rounded-lg bg-gray-700 animate-pulse"
              >
                <div className="w-20 h-20 bg-gray-500 rounded-md"></div>
                <div className="w-16 h-4 bg-gray-500 rounded-md"></div>
              </div>
            ))
          : providers
              .slice(0, 10)
              .map((provider) => (
                <ProviderCard
                  key={provider.provider_id}
                  provider={provider}
                  setProvidersSelected={setProvidersSelected}
                  providersSelected={providersSelected}
                />
              ))}

        {showMoreProviders &&
          providers
            .slice(10)
            .map((provider) => (
              <ProviderCard
                key={provider.provider_id}
                provider={provider}
                setProvidersSelected={setProvidersSelected}
                providersSelected={providersSelected}
              />
            ))}

        <button
          className="col-span-full mt-2 bg-gray-800 border border-gray-700 text-white py-3 px-4 rounded-xl hover:bg-gray-700 transition-colors hover:cursor-pointer font-medium"
          onClick={() => setShowMoreProviders(!showMoreProviders)}
        >
          {showMoreProviders ? "Mostrar menos" : "Mostrar más plataformas"}
        </button>
      </div>
    </section>
  );
};

export default ProvidersSelect;
