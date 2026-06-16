import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "La Vague d'Orres - Rafting Durance Les Orres",
  description: "Laissez-vous guider sur les rapides de la Durance (11km). Transport inclus au départ de la station des Orres 1800. Matériel haut de gamme fourni.",
  keywords: ["Rafting", "Les Orres", "La Vague d'Orres", "Durance", "Eaux Vives", "Hautes-Alpes", "Sport d'eau"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#f8fafc] text-[#0f172a] dark:bg-[#030a10] dark:text-[#f8fafc] transition-colors duration-300">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}


