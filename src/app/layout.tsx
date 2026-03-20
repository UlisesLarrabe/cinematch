import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CineMatch | Encuentra la película perfecta con amigos",
  description:
    "¿No saben qué ver? Crea una sala, elige tus plataformas de streaming (Netflix, Prime, Disney+), desliza y haz match con tus amigos. Se acabaron las discusiones.",
  keywords: [
    "películas",
    "match",
    "streaming",
    "qué ver",
    "cine",
    "amigos",
    "netflix",
  ],
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "CineMatch | Haz match y decide qué ver 🍿",
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
    title: "CineMatch | El Tinder para elegir qué película ver 🍿",
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
