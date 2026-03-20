import { Movie } from "@/types/movie.type";
import { createClient } from "@/utils/supabase/client";
import { useAnonUser } from "@/utils/user/user";
import { motion, useMotionValue, useTransform } from "motion/react";
import { ParamValue } from "next/dist/server/request/params";

const Card = ({
  movie,
  setMovies,
  movies,
  roomId,
}: {
  movie: Movie;
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  movies: Movie[];
  roomId: ParamValue | undefined;
}) => {
  const supabase = createClient();
  const userId = useAnonUser();
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0.3, 1, 0.3]);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const isFront = movies[movies.length - 1].id === movie.id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : movie.id % 2 ? 4 : -4;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = async () => {
    if (Math.abs(x.get()) > 50) {
      setMovies((prev) => prev.filter((m) => m.id !== movie.id));
      console.log(roomId, userId);
      if (roomId && userId) {
        await supabase.from("votes").insert({
          movie_id: movie.id,
          room_id: roomId,
          user_id: userId,
          liked: x.get() > 0,
          movie_data: x.get() > 0 ? movie : null,
        });
      }
    }
  };
  return (
    <motion.article
      className="h-96 w-72 object-cover rounded-lg p-4 hover:cursor-grab active:cursor-grabbing origin-bottom border border-white/20"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
      }}
      drag="x"
      onDragEnd={handleDragEnd}
      dragConstraints={{ left: 0, right: 0 }}
    ></motion.article>
  );
};

export default Card;
