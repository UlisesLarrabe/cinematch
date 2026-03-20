import CirclePlus from "@/svgs/circle-plus";
import { HandFinger } from "@/svgs/hand-finger";
import Movie from "@/svgs/movie";

const MoreInfoSection = () => {
  return (
    <section className="w-full lg:w-5xl pt-4 flex flex-col gap-4 p-2">
      <h2 className="text-3xl font-bold text-white">Elige tu película</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <article className="flex flex-col gap-4 border-2 bg-[#131313] rounded-lg p-10">
          <div className="bg-[#262626] p-4 rounded-sm w-fit text-[#FF8E80]">
            <CirclePlus />
          </div>
          <p className="text-2xl text-white font-semibold">CREA UNA SALA</p>
          <p className="text-[#5B5A5A]">
            Instantáneo, sin necesidad de registrarse. Genera un enlace único y
            envíalo a tu pareja o amigos.
          </p>
        </article>
        <article className="flex flex-col gap-4 border-2 bg-[#131313] rounded-lg p-10">
          <div className="bg-[#262626] p-4 rounded-sm w-fit text-[#FF8E80]">
            <HandFinger />
          </div>
          <p className="text-2xl text-white font-semibold">
            DESLIZA PARA EL MATCH
          </p>
          <p className="text-[#5B5A5A]">
            {`Navega rápidamente por títulos seleccionados. Desliza a la derecha para 'Si' y a la izquierda para 'Quizás la próxima'.`}
          </p>
        </article>
        <article className="flex flex-col gap-4 border-2 bg-[#131313] rounded-lg p-10">
          <div className="bg-[#262626] p-4 rounded-sm w-fit text-[#FF8E80]">
            <Movie />
          </div>
          <p className="text-2xl text-white font-semibold">VER JUNTOS</p>
          <p className="text-[#5B5A5A]">
            {`Cuando ambos dicen que sí, ¡es un match!`}
          </p>
        </article>
      </div>
      <article className="flex md:flex-row flex-col gap-4 border-2 bg-[#131313] rounded-lg">
        <div className="flex flex-col gap-4 h-full p-10 md:w-[50%]">
          <p className="text-2xl text-white font-semibold">
            MATCH SEGÚN EL MOOD
          </p>
          <p className="text-[#5B5A5A]">
            Busca pelícuas según el género. Desde Acción hasta Comedia,
            encontramos la película perfecta para ti.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 text-[#505050] md:pr-10 md:w-[50%] place-items-center">
          <div className="bg-[#1E1E1E] h-16 md:h-full flex justify-center items-center w-full md:w-37.5">
            <p>ACCIÓN</p>
          </div>
          <div className="bg-red-neutral h-16 md:h-full flex justify-center items-center w-full  md:w-37.5">
            <p className="text-white">DRAMA</p>
          </div>
          <div className="bg-[#1E1E1E] h-16 md:h-full flex justify-center items-center w-full  md:w-37.5">
            <p>COMEDIA</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default MoreInfoSection;
