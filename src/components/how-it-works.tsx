import Copy from "@/svgs/copy";
import Heart from "@/svgs/heart";
import PlayTv from "@/svgs/play-tv";
import Share from "@/svgs/share";
import Link from "next/link";

const HowItWorks = () => {
  return (
    <section className="bg-neutral text-white py-24 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Encuentra tu próxima <br />
          <span className="text-[#FF6B6B]">película favorita.</span>
        </h2>
        <p className="text-neutral-400 text-lg md:text-xl font-light">
          Adiós a las horas perdidas navegando por catálogos interminables. Con
          CineMatch, elegir qué ver es tan emocionante como la película misma.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-800 -translate-x-1/2"></div>

        <div className="relative flex flex-col md:flex-row items-center justify-between mb-24 lg:mb-32">
          <div className="md:w-5/12 text-center md:text-right mb-10 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Paso 1: Crea tu Sala</h3>
            <p className="text-neutral-400 font-light leading-relaxed text-lg">
              Selecciona tus plataformas preferidas (Netflix, HBO, Disney+,
              etc.) y tus géneros favoritos. No necesitas registro previo ni
              log-ins complicados. Solo tú y tus ganas de cine.
            </p>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#111] border border-neutral-700 z-10 shadow-[0_0_15px_rgba(255,107,107,0.1)] text-[#FF6B6B]">
            <PlayTv />
          </div>
          <div className="md:w-5/12 flex justify-center md:justify-start w-full">
            <div className="bg-[#111] border border-neutral-800/50 rounded-2xl p-8 w-full max-w-sm flex justify-center gap-6 shadow-2xl">
              <div className="w-14 h-14 bg-neutral-800/80 rounded-xl flex items-center justify-center text-xl font-bold text-neutral-500">
                N
              </div>
              <div className="w-14 h-14 bg-neutral-800/80 rounded-xl flex items-center justify-center text-xl font-bold text-neutral-500">
                M
              </div>
              <div className="w-14 h-14 bg-neutral-800/80 rounded-xl flex items-center justify-center text-xl font-bold text-neutral-500">
                D+
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between mb-24 lg:mb-32">
          <div className="md:w-5/12 flex justify-center md:justify-end w-full mb-10 md:mb-0 md:order-1 order-2">
            <div className="bg-[#111] border border-neutral-800/50 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
              <div className="flex items-center justify-between bg-neutral-900 rounded-lg p-3 mb-6 border border-neutral-800">
                <span className="text-sm text-neutral-500 font-mono">
                  cinematch.fun/room/x92f...
                </span>
                <Copy />
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FF6B6B] flex items-center justify-center text-xs font-bold text-white shadow-lg">
                  TÚ
                </div>
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-xs font-bold text-black shadow-lg">
                  ?
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#111] border border-neutral-700 z-10 md:order-2 shadow-[0_0_15px_rgba(255,107,107,0.1)] text-[#FF6B6B]">
            <Share height="20" width="20" />
          </div>
          <div className="md:w-5/12 text-center md:text-left md:order-3 order-1 mb-10 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">
              Paso 2: Invita a tu Pareja
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed text-lg">
              Generamos un enlace único para tu sesión. Compártelo con tu
              pareja, amigo o conviviente de sofá. Una vez que se unan, la magia
              del match comienza.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-5/12 text-center md:text-right mb-10 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">
              Paso 3: Elige y Haz Match
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed text-lg">
              Disfruta del minijuego de selección. Desliza a la derecha si te
              apetece, a la izquierda si no. Cuando ambos coincidan en una
              película... ¡Habemus Match!
            </p>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#111] border border-neutral-700 z-10 shadow-[0_0_15px_rgba(255,107,107,0.2)] text-[#FF6B6B]">
            <Heart />
          </div>
          <div className="md:w-5/12  md:justify-start w-full grid place-items-center">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className={`h-96 w-72 rounded-lg p-4 bg-[#222222] ${index % 2 === 0 ? "rotate-6" : "-rotate-6"}`}
                style={{ gridRow: 1, gridColumn: 1 }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-32 md:mt-40 bg-[#111] border border-neutral-800 rounded-[2.5rem] py-16 px-6 text-center shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
          ¿Listos para ver una película?
        </h2>
        <Link
          href="/room/create"
          className="inline-block bg-[#FF6B6B] text-white font-semibold py-4 px-10 rounded-full hover:bg-[#ff5252] transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,107,107,0.3)] text-lg cursor-pointer"
        >
          Empezar ahora
        </Link>
        <p className="text-neutral-500 text-sm mt-8 font-light">
          Sin registros. Sin esperas.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
