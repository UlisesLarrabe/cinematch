"use client";

import { Movie } from "@/types/movie.type";
import { createClient } from "@/utils/supabase/client";
import { ParamValue } from "next/dist/server/request/params";
import { useEffect, useState } from "react";
import Card from "./card";
import ItsAMatch from "./its-a-match";
import { useAnonUser } from "@/utils/user/user";
import ShareButton from "./share-button";
import NoMoreFilms from "./no-more-films";
import Heart from "@/svgs/heart";
import { LetterX } from "@/svgs/letter-x";

const SwipeMovies = ({ roomId }: { roomId: ParamValue | undefined }) => {
  const supabase = createClient();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [match, setMatch] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const userId = useAnonUser();

  const getMovies = async () => {
    setIsLoading(true);
    try {
      const providers = await supabase
        .from("rooms")
        .select("providers")
        .eq("id", roomId)
        .single();
      const genres = await supabase
        .from("rooms")
        .select("genres")
        .eq("id", roomId)
        .single();
      const region = await supabase
        .from("rooms")
        .select("region")
        .eq("id", roomId)
        .single();
      const genresArray = genres.data?.genres || [];
      const providersArray = providers.data?.providers || [];
      const regionValue = region.data?.region || undefined;
      const res = await fetch("/api/get-movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          providers: providersArray,
          genres: genresArray,
          region: regionValue,
        }),
      });
      if (!res.ok) {
        throw new Error("Error al obtener las películas");
      }
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error al obtener las películas:", error);
    } finally {
      setIsLoading(false);
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
    <div className="min-h-dvh h-full flex flex-col justify-center items-center pt-20">
      <div className=" pb-4">
        <p className="text-3xl font-bold text-center">
          ¡Encuentra la película que ambos amen!
        </p>
        <div className=" text-gray-300 pt-2.5 w-full text-center">
          {`Desliza a la derecha para 'Si' y a la izquierda para 'Quizás la
          próxima'.`}
        </div>
      </div>
      <section className="grid place-items-center w-full max-w-5xl mx-auto min-h-[60dvh]">
        {match && <ItsAMatch match={match} setMatch={setMatch} />}
        {movies.length === 0 && !match && !isLoading && <NoMoreFilms />}
        {isLoading &&
          Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`h-96 w-72 rounded-lg p-4 bg-gray-700 animate-pulse ${index % 2 === 0 ? "rotate-6" : "-rotate-6"}`}
              style={{ gridRow: 1, gridColumn: 1 }}
            ></div>
          ))}
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
      {movies.length > 0 && (
        <>
          <div className="lg:w-5xl flex gap-10 items-center  justify-center">
            <button
              className="bg-gray-500 rounded-full p-4 text-center hover:cursor-pointer hover:bg-gray-800"
              onClick={() => {
                const movieAlFrente = movies[0];
                if (movieAlFrente) handleDiscardMovie(movieAlFrente, false);
              }}
            >
              <LetterX className="text-red-800 h-10 w-10" />
            </button>

            <button
              className="bg-red-neutral rounded-full p-4 text-center hover:cursor-pointer hover:bg-red-500 text-red-800"
              onClick={() => {
                const movieAlFrente = movies[0];
                if (movieAlFrente) handleDiscardMovie(movieAlFrente, true);
              }}
            >
              <Heart className="text-red-800 h-10 w-10" />
            </button>
          </div>
        </>
      )}
      <div className="mt-10 ">
        <ShareButton roomId={roomId || ""} />
      </div>
    </div>
  );
};

export default SwipeMovies;
