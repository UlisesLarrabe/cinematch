import { Genre } from "@/types/genre.type";
import React from "react";
import GenreCard from "./genre-card";

const GenresSelect = ({
  genres,
  genresSelected,
  setGenresSelected,
}: {
  genres: Genre[];
  genresSelected: number[];
  setGenresSelected: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  return (
    <section>
      <p className="text-base md:text-lg font-semibold text-red-neutral">
        Paso 2:
      </p>
      <h2 className="text-3xl md:text-4xl font-bold">
        Elige el <span className="text-red-neutral">Género</span>
      </h2>
      <p className="text-sm md:text-base text-gray-300 mt-2 max-w-3xl">
        ¿De qué tienen ganas hoy? Puedes elegir varios o dejarlo en blanco para
        sorpresa total.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mt-8">
        {genres.length === 0
          ? Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-2 rounded-lg bg-gray-700 animate-pulse"
              >
                <div className="w-16 h-10 bg-gray-500 rounded-md"></div>
              </div>
            ))
          : genres.map((genre) => (
              <GenreCard
                key={genre.id}
                genre={genre}
                genresSelected={genresSelected}
                setGenresSelected={setGenresSelected}
              />
            ))}
      </div>
    </section>
  );
};

export default GenresSelect;
