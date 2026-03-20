"use client";

import { Provider } from "@/types/provider.type";

const ProviderCard = ({
  provider,
  setProvidersSelected,
  providersSelected,
}: {
  provider: Provider;
  setProvidersSelected: React.Dispatch<React.SetStateAction<number[]>>;
  providersSelected: number[];
}) => {
  const handleSelectProvider = async () => {
    const isSelected = providersSelected.includes(provider.provider_id);
    const newSelection = isSelected
      ? providersSelected.filter((id) => id !== provider.provider_id)
      : [...providersSelected, provider.provider_id];

    setProvidersSelected(newSelection);
  };
  return (
    <button
      className={`flex flex-col items-center gap-2 p-2 rounded-lg hover:cursor-pointer ${
        providersSelected.includes(provider.provider_id)
          ? "border-2 border-red-neutral"
          : "border-2 border-transparent hover:border-white/20"
      } transition-colors `}
      onClick={handleSelectProvider}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
        alt={provider.provider_name}
        className="w-20 h-20 object-contain"
      />
      <span>{provider.provider_name}</span>
    </button>
  );
};

export default ProviderCard;
