"use client";
import ConfigureRoom from "@/components/configure-room";
import GenerateRoom from "@/components/generate-room";
import { useState } from "react";

export default function CreateRoomPage() {
  const [providersSelected, setProvidersSelected] = useState<number[]>([]);

  return (
    <div className="min-h-dvh bg-neutral flex flex-col text-white justify-center items-center">
      <section className="w-5xl pt-4 flex flex-col gap-10">
        <ConfigureRoom
          providersSelected={providersSelected}
          setProvidersSelected={setProvidersSelected}
        />
        <GenerateRoom providersSelected={providersSelected} />
      </section>
    </div>
  );
}
