import type { Metadata } from "next";
import { Montserrat, Oswald } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: 'swap',
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Lenin Barber & Tattoo | Barbería & Estudio de Tatuajes Premium",
  description: "Barbería y estudio de tatuajes premium. Estilo, arte y personalidad en un solo lugar. Reserva tu cita hoy.",
};

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-black text-white">
      <body
        className={`${montserrat.variable} ${oswald.variable} antialiased bg-black min-h-screen flex flex-col font-sans`}
      >
        <Header />
        <main className="pt-20 flex-1 w-full mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}