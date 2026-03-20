"use client";
import { Movie } from "@/types/movie.type";
import { useEffect, useState } from "react";
import Card from "./components/card";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const res = await fetch("/api/get-movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      if (!res.ok) {
        throw new Error("Error al obtener las películas");
      }
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error al obtener las películas:", error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <main>
      <h1>Cinematch</h1>
      <section className="grid place-items-center">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            movie={movie}
            setMovies={setMovies}
            movies={movies}
          />
        ))}
      </section>
    </main>
  );
}
