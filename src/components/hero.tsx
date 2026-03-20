import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col max-w-5xl min-h-screen bg-neutral justify-center items-center overflow-hidden pt-20"
      style={{
        backgroundImage: `url('/hero-background.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-neutral via-black/5 md:via-black/60 to-black/10" />

      <div className="absolute inset-0 bg-linear-to-r from-neutral via-black/5 md:via-black/10 to-transparent" />

      <div className="absolute inset-0 bg-linear-to-l from-neutral via-black/5 md:via-black/10 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">
        <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
          <h1 className="text-white font-bold text-3xl md:text-7xl lg:text-8xl leading-tight">
            Elige una película <br />
            <span className="text-red-600">sin dar vueltas</span>
          </h1>
          <p className="text-gray-300 font-light text-xl mt-8 max-w-lg">
            Una sala compartida, dos personas y un solo match.
            <span className="block font-semibold text-white mt-2">
              Sin registros, sin vueltas.
            </span>
          </p>

          <div className="mt-10">
            <Link
              className="inline-block bg-red-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-red-700 transition-all hover:scale-105 shadow-lg shadow-red-900/20"
              href={"/room/create"}
            >
              Empezar una sala ahora
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="absolute w-64 h-64 bg-red-600/20 blur-[100px] rounded-full" />

          <div className="relative w-full max-w-[300px] md:max-w-[350px] drop-shadow-2xl">
            <video
              src="/hero-demo.mov"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto rounded-[2.5rem] border-4 border-neutral-800 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
