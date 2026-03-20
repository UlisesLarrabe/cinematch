"use client";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

const GenerateRoom = ({
  providersSelected,
}: {
  providersSelected: number[];
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const supabase = createClient();
  const handleCreateRoom = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("rooms")
        .insert({ providers: providersSelected })
        .select()
        .single();
      if (data) {
        window.location.href = `/room/${data.id}`;
      }
      if (error) {
        setShowError(true);
      }
    } catch (error) {
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <button
        className="bg-red-neutral text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 hover:cursor-pointer w-fit self-end"
        onClick={handleCreateRoom}
        disabled={isLoading}
      >
        {isLoading ? "Creando sala..." : "Crear sala"}
      </button>
      {showError && (
        <p className="text-red-500 pt-4">
          Error al crear la sala. Por favor, intenta de nuevo.
        </p>
      )}
    </>
  );
};

export default GenerateRoom;
