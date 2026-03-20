"use client";

import { Movie } from "@/types/movie.type";
import { createClient } from "@/utils/supabase/client";
import { ParamValue } from "next/dist/server/request/params";
import { useEffect, useState } from "react";
import Card from "./card";
import ItsAMatch from "./its-a-match";
import { useAnonUser } from "@/utils/user/user";

const SwipeMovies = ({ roomId }: { roomId: ParamValue | undefined }) => {
  const supabase = createClient();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [match, setMatch] = useState<Movie | null>(null);
  const userId = useAnonUser();

  const getMovies = async () => {
    try {
      const providers = await supabase
        .from("rooms")
        .select("providers")
        .eq("id", roomId)
        .single();
      const providersArray = providers.data?.providers || [];
      const res = await fetch("/api/get-movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ providers: providersArray }),
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

  useEffect(() => {
    if (!roomId) return;

    const channel = supabase
      .channel(`votos_sala_${roomId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "votes",
          filter: `room_id=eq.${roomId}`,
        },
        async (payload) => {
          const newVote = payload.new;

          if (newVote.liked === true) {
            const { data: otherVotes, count } = await supabase
              .from("votes")
              .select("movie_data")
              .eq("movie_id", newVote.movie_id)
              .eq("room_id", roomId)
              .eq("liked", true)
              .neq("user_id", newVote.user_id)
              .limit(1);

            if (otherVotes && otherVotes.length > 0) {
              console.log("🎉 MATCH EN TIEMPO REAL!");
              setMatch(newVote.movie_data);
            }
          }
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [roomId]);

  const handleDiscardMovie = async (movie: Movie, liked: boolean) => {
    setMovies((prev) => prev.filter((m) => m.id !== movie.id));
    if (roomId) {
      await supabase.from("votes").insert({
        movie_id: movie.id,
        room_id: roomId,
        user_id: userId || undefined,
        liked,
        movie_data: liked ? movie : null,
      });
    }
  };

  return (
    <div className="min-h-dvh flex flex-col justify-center items-center">
      <section className="grid place-items-center">
        {match && <ItsAMatch match={match} setMatch={setMatch} />}
        {[...movies].reverse().map((movie) => (
          <Card
            key={movie.id}
            movie={movie}
            setMovies={setMovies}
            movies={movies}
            roomId={roomId}
          />
        ))}
      </section>
      <div className="w-5xl flex gap-10 items-center mt-10 justify-center">
        <button
          className="bg-gray-500 rounded-full p-4 text-center hover:cursor-pointer hover:bg-gray-800"
          onClick={() => {
            const movieAlFrente = movies[0];
            if (movieAlFrente) handleDiscardMovie(movieAlFrente, false);
          }}
        >
          ❌
        </button>

        <button
          className="bg-red-neutral rounded-full p-4 text-center hover:cursor-pointer hover:bg-red-500"
          onClick={() => {
            const movieAlFrente = movies[0];
            if (movieAlFrente) handleDiscardMovie(movieAlFrente, true);
          }}
        >
          ♥️
        </button>
      </div>
      <div className="absolute bottom-10 text-gray-300">
        <p>Desliza hacia la derecha si te gusta, hacia la izquierda si no.</p>
      </div>
      <div className="absolute top-20 text-gray-300">
        <p>¡Encuentra películas que ambos amen!</p>
      </div>
    </div>
  );
};

export default SwipeMovies;
