export const revalidate = 86400;

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const textBody = await request.text();
    const body = textBody ? JSON.parse(textBody) : {};

    const { providers, genres, region } = body;

    const apiToken = process.env.API_KEY;

    let tmdbUrl = "https://api.themoviedb.org/3/discover/movie?language=es-ES";

    if (providers && Array.isArray(providers) && providers.length > 0) {
      const providersString = providers.join("|");
      tmdbUrl += `&with_watch_providers=${providersString}`;
    }

    if (genres && Array.isArray(genres) && genres.length > 0) {
      const genresString = genres.join("|");
      tmdbUrl += `&with_genres=${genresString}`;
    }

    const selectedRegion = region || "AR";
    tmdbUrl += `&watch_region=${selectedRegion}`;

    const response = await fetch(tmdbUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: errorText },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error en route.ts:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
