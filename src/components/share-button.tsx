"use client";

import Share from "@/svgs/share";
import { ParamValue } from "next/dist/server/request/params";
import { useState } from "react";

const ShareButton = ({ roomId }: { roomId: ParamValue }) => {
  const [copied, setCopied] = useState(false);

  const roomUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/room/${roomId}`;

  const shareText = `¡Únete a mi sala para elegir qué película vemos hoy! 🍿👇\n\n`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "CineMatch",
          text: shareText,
          url: roomUrl,
        });
        return;
      } catch (error) {
        console.log("El usuario canceló o hubo un error al compartir.");
      }
    }

    try {
      await navigator.clipboard.writeText(shareText + roomUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("No se pudo copiar", err);
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center w-full max-w-sm mx-auto ">
      <button
        onClick={handleShare}
        className="w-full bg-[#1A1818] text-white font-bold py-3 px-6 rounded-xl hover:cursor-pointer hover:bg-[#1A1818]/40 transition-colors shadow-lg active:scale-95 flex justify-center items-center gap-2"
      >
        <Share height="24" width="24" />
        {copied ? "¡Link Copiado! ✅" : "Comparte esta sala"}
      </button>
    </div>
  );
};

export default ShareButton;
