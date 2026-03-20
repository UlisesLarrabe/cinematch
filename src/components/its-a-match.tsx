import { Movie } from "@/types/movie.type";
import { motion } from "motion/react";

export default function ItsAMatch({
  match,
  setMatch,
}: {
  match: Movie;
  setMatch: React.Dispatch<React.SetStateAction<Movie | null>>;
}) {
  return (
    <div className="absolute inset-0 z-50 bg-dark/95 flex flex-col items-center min-h-dvh justify-center p-6 text-center backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="border-2 border-neon-purple p-2 rounded-2xl shadow-[0_0_30px_rgba(138,43,226,0.6)]"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${match.poster_path}`}
          className="w-64 rounded-xl"
          alt={match.title}
        />
      </motion.div>

      <h2 className="text-4xl font-black text-white mt-6 uppercase tracking-tighter">
        🍿 ¡Es un Match! 🍿
      </h2>
      <h3 className="text-neon-purple text-2xl font-bold mt-2">
        {match.title}
      </h3>
      <p className="text-gray-400 mt-4 max-w-xs text-sm line-clamp-3">
        {match.overview}
      </p>

      <button
        onClick={() => setMatch(null)}
        className="mt-8 px-8 py-3 bg-neon-purple  font-bold rounded-full hover:scale-105 transition-transform hover:cursor-pointer text-red-neutral"
      >
        SEGUIR BUSCANDO
      </button>
    </div>
  );
}
