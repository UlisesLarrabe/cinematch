import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const textBody = await request.text();
    const body = textBody ? JSON.parse(textBody) : {};
    const { providers } = body;

    const apiToken = process.env.API_KEY;

    let tmdbUrl =
      "https://api.themoviedb.org/3/discover/movie?language=es-ES&watch_region=AR";

    if (providers && Array.isArray(providers) && providers.length > 0) {
      const providersString = providers.join("|");
      tmdbUrl += `&with_watch_providers=${providersString}`;
    }
    console.log("URL de TMDB:", tmdbUrl);
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
