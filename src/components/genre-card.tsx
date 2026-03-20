"use client";

import { Genre } from "@/types/genre.type";

export default function GenreCard({
  genre,
  genresSelected,
  setGenresSelected,
}: {
  genre: Genre;
  genresSelected: number[];
  setGenresSelected: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  const isSelected = genresSelected.includes(genre.id);

  const handleSelectGenre = () => {
    setGenresSelected((prev) => {
      if (isSelected) {
        return prev.filter((id) => id !== genre.id);
      } else {
        return [...prev, genre.id];
      }
    });
  };

  return (
    <button
      onClick={handleSelectGenre}
      className={`p-3 md:p-4 rounded-xl font-medium text-sm md:text-base transition-all duration-300 hover:cursor-pointer flex items-center justify-center text-center ${
        isSelected
          ? "bg-red-neutral text-white shadow-[0_0_15px_rgba(239,68,68,0.4)] scale-105 border-transparent"
          : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700"
      }`}
    >
      {genre.name}
    </button>
  );
}
