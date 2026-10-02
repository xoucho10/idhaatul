import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
export const viewport = { width: 'device-width', initialScale: 1, maximumScale: 5 }

export const metadata: Metadata = {
  title: "IDHAATUL QUR'ANILKARIM - Est. 1980 | Madrasa in Kampala",
  description: "Preserving the Qur'an Since 1980. Hifz, Tajweed, Arabic, Islamic Studies.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <a href="https://wa.me/256700000000?text=As-salamu%20Alaikum" className="fixed bottom-5 right-5 bg-[#0a4d2e] text-white px-5 py-3 rounded-full shadow-2xl z-50 font-bold">WhatsApp</a>
      </body>
    </html>
  );
}
