import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col min-h-screen bg-neutral justify-center items-center lg:w-5xl "
      style={{
        backgroundImage: `url('/hero-background.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-neutral via-black/5 md:via-black/60 to-black/10" />
      <div className="absolute inset-0 bg-linear-to-r from-neutral via-black/5 md:via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-l from-neutral via-black/5 md:via-black/10 to-transparent" />
      <div className="relative z-10 flex flex-col justify-center items-center">
        <p className="text-white font-semibold text-center text-5xl md:text-8xl">
          Elige una película
        </p>
        <p className="text-red-neutral font-semibold text-center text-5xl md:text-8xl">
          sin dar vueltas
        </p>
        <p className="text-gray-100 font-light text-center text-lg pt-9">
          Una sala compartida y un solo match.
        </p>
        <p className="text-gray-100 font-light text-center text-lg pb-9">
          Sin iniciar sesión.
        </p>
        <Link
          className="bg-red-neutral text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 hover:cursor-pointer"
          href={"/room/create"}
        >
          Empezar una sala
        </Link>
      </div>
    </section>
  );
};

export default Hero;
