"use client";

import { useParams } from "next/navigation";
import SwipeMovies from "@/components/swipe-movies";

const Page = () => {
  const { roomId } = useParams();

  return (
    <div className="bg-neutral min-h-dvh w-full flex flex-col text-white items-center">
      <section className="w-5xl pt-4 flex flex-col gap-10">
        <SwipeMovies roomId={roomId} />
      </section>
    </div>
  );
};

export default Page;
