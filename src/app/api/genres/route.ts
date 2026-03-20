export const revalidate = 86400;

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiToken = process.env.API_KEY;

    if (!apiToken) {
      return NextResponse.json({ error: "Falta Token" }, { status: 500 });
    }

    const url = "https://api.themoviedb.org/3/genre/movie/list?language=es-ES";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener géneros de TMDB");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error en genres route:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
