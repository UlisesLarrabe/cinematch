import { Adjustment } from "@/svgs/adjustment";
import MovieOff from "@/svgs/movie-off";
import { Reload } from "@/svgs/reload";
import { UserPlus } from "@/svgs/user-plus";
import Link from "next/link";

const NoMoreFilms = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col gap-4 items-center">
        <div className="text-red-neutral flex justify-center items-center">
          <MovieOff height={80} width={80} />
        </div>
        <h2 className="text-4xl font-bold text-center">
          ¡Se acabaron las opciones!
        </h2>
        <p className="text-[#9A9797] max-w-100 text-center">
          Parece que habéis visto todo lo que encajaba con vuestros filtros. No
          dejéis que la noche termine aquí.
        </p>
      </div>

      <Link
        href="/room/create"
        className="bg-red-neutral text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700"
      >
        Reintentar con nuevos filtros
      </Link>

      <section className="grid md:grid-cols-3 gap-4">
        <article className="pl-6 pr-10 pt-6 pb-6 bg-[#1F1B1B] rounded-4xl flex flex-col gap-8">
          <div className="p-4 rounded-2xl bg-[#312423] w-fit">
            <Adjustment className="text-red-neutral" />
          </div>
          <div>
            <h3 className="text-white text-xl font-bold">Ajustar filtros</h3>
            <p className="text-sm text-[#8E8C8C]">
              Añade más géneros o invluye nuevas plataformas de streaming.
            </p>
          </div>
        </article>
        <article className="pl-6 pr-10 pt-6 pb-6 bg-[#1F1B1B] rounded-4xl flex flex-col gap-8">
          <div className="p-4 rounded-2xl bg-[#392F23] w-fit">
            <Reload className="text-[#F6CB54]" />
          </div>
          <div>
            <h3 className="text-white text-xl font-bold">Nueva sesión</h3>
            <p className="text-sm text-[#8E8C8C]">
              Reinicia el juego recargando la página y empezad de nuevo con las
              mismas preferencias.
            </p>
          </div>
        </article>
        <article className="pl-6 pr-10 pt-6 pb-6 bg-[#1F1B1B] rounded-4xl flex flex-col gap-8">
          <div className="p-4 rounded-2xl bg-[#332A34] w-fit">
            <UserPlus className="text-[#D8A1FC]" />
          </div>
          <div>
            <h3 className="text-white text-xl font-bold">
              Invitar a otro amigo
            </h3>
            <p className="text-sm text-[#8E8C8C]">
              Suma a alguien más a la sala para una nueva ronda de votación.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default NoMoreFilms;
