import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Stars from "@/components/layout/Stars";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Belal Rezk",
  description: "Belal Rezk's Personal Portfolio",
  icons: {
    icon: "/belal-title.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <html lang="en" className="snap-y snap-mandatory !scroll-smooth">
      <body className={`${inter.className} bg-black text-gray-50`}>
        <Stars />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
