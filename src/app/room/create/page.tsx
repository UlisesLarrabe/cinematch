"use client";
import ConfigureRoom from "@/components/configure-room";
import GenerateRoom from "@/components/generate-room";
import { useState } from "react";

export default function CreateRoomPage() {
  const [providersSelected, setProvidersSelected] = useState<number[]>([]);
  const [regionSelected, setRegionSelected] = useState<string>("AR");
  const [genresSelected, setGenresSelected] = useState<number[]>([]);

  return (
    <div className="min-h-dvh bg-neutral flex flex-col text-white justify-center items-center">
      <section className="w-full max-w-5xl px-4 md:px-8 pt-10 flex flex-col gap-10">
        <ConfigureRoom
          providersSelected={providersSelected}
          setProvidersSelected={setProvidersSelected}
          genresSelected={genresSelected}
          setGenresSelected={setGenresSelected}
          regionSelected={regionSelected}
          setRegionSelected={setRegionSelected}
        />

        <GenerateRoom
          providersSelected={providersSelected}
          genresSelected={genresSelected}
          regionSelected={regionSelected}
        />
      </section>
    </div>
  );
}
