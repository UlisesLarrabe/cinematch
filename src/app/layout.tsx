import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cinematch.fun"),
  title: "CineMatch | El Tinder de las películas para elegir qué ver",
  description:
    "¿No saben qué ver? Crea una sala compartida, elige tus plataformas (Netflix, Prime, Disney+), desliza y haz match. Se acabaron las peleas por elegir película.",
  keywords: [
    "películas",
    "match",
    "streaming",
    "qué ver",
    "cine",
    "amigos",
    "pareja",
    "netflix",
    "tinder de películas",
    "elegir película en pareja",
    "juego colaborativo cine",
    "app para elegir películas",
    "qué ver en netflix",
  ],
  creator: "CineMatch Team",
  publisher: "CineMatch",
  applicationName: "CineMatch",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "CineMatch | El Tinder de las películas 🍿",
    description:
      "Crea una sala compartida, desliza hacia la derecha y descubre en qué película coinciden todos. ¡Preparen las palomitas!",
    url: "https://cinematch.fun",
    siteName: "CineMatch",
    images: [
      {
        url: "/cinematch-logo.webp",
        width: 1200,
        height: 630,
        alt: "Vista previa de CineMatch",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CineMatch | El Tinder de las películas 🍿",
    description:
      "Desliza, haz match y decidan qué ver esta noche sin pelear. Filtra por tus plataformas de streaming favoritas.",
    images: ["/cinematch-logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
