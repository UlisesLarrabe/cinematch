import GenerateRoom from "@/components/generate-room";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral justify-center items-center">
      <p className="text-white font-semibold text-center text-8xl">
        Elige una película
      </p>
      <p className="text-red-neutral font-semibold text-center text-8xl">
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
    </main>
  );
}
