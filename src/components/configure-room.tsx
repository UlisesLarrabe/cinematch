"use client";

import { useEffect, useState } from "react";
import { Provider } from "@/types/provider.type";
import { Genre } from "@/types/genre.type";
import ProvidersSelect from "./providers-select";
import GenresSelect from "./genres-select";
import { Region } from "@/types/region.type";
import RegionSelect from "./region-select";

export default function ConfigureRoom({
  providersSelected,
  setProvidersSelected,
  genresSelected,
  setGenresSelected,
  regionSelected,
  setRegionSelected,
}: {
  providersSelected: number[];
  setProvidersSelected: React.Dispatch<React.SetStateAction<number[]>>;
  genresSelected: number[];
  setGenresSelected: React.Dispatch<React.SetStateAction<number[]>>;
  regionSelected: string;
  setRegionSelected: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [showMoreProviders, setShowMoreProviders] = useState(false);
  const [regions, setRegions] = useState<Region[]>([]);
  const handleGetProviders = async () => {
    try {
      const cached = sessionStorage.getItem("tmdb_providers");
      if (cached) {
        setProviders(JSON.parse(cached));
        return;
      }
      const res = await fetch("/api/providers");
      if (!res.ok) throw new Error("Error al obtener proveedores");
      const data = await res.json();
      sessionStorage.setItem("tmdb_providers", JSON.stringify(data.results));
      setProviders(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  const handleGetRegions = async () => {
    try {
      const cached = sessionStorage.getItem("tmdb_regions");
      if (cached) {
        setRegions(JSON.parse(cached));
        return;
      }
      const res = await fetch("/api/regions");
      if (!res.ok) throw new Error("Error al obtener regiones");
      const data = await res.json();
      const sortedRegions = data.results.sort((a: Region, b: Region) =>
        a.native_name.localeCompare(b.native_name),
      );
      sessionStorage.setItem("tmdb_regions", JSON.stringify(sortedRegions));
      setRegions(sortedRegions);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetGenres = async () => {
    try {
      const cached = sessionStorage.getItem("tmdb_genres");
      if (cached) {
        setGenres(JSON.parse(cached));
        return;
      }
      const res = await fetch("/api/genres");
      if (!res.ok) throw new Error("Error al obtener géneros");
      const data = await res.json();
      sessionStorage.setItem("tmdb_genres", JSON.stringify(data.genres));
      setGenres(data.genres);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetProviders();
    handleGetGenres();
    handleGetRegions();
  }, []);

  return (
    <div className="w-full flex flex-col max-w-5xl mx-auto py-6 space-y-16">
      <ProvidersSelect
        providers={providers}
        providersSelected={providersSelected}
        setProvidersSelected={setProvidersSelected}
        showMoreProviders={showMoreProviders}
        setShowMoreProviders={setShowMoreProviders}
      />

      <GenresSelect
        genres={genres}
        genresSelected={genresSelected}
        setGenresSelected={setGenresSelected}
      />

      <RegionSelect
        regionSelected={regionSelected}
        setRegionSelected={setRegionSelected}
        regions={regions}
      />
    </div>
  );
}
