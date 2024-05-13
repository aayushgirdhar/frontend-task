import { BottomNavigation } from "./components/BottomNavigation";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fibo Task",
  description: "Made by Aayush Girdhar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-bg-primary`}>
        <div className="h-full flex flex-col gap-24 md:w-[30rem] mx-auto shadow-2xl">
          <main>{children}</main>
          <footer>
            <BottomNavigation />
          </footer>
        </div>
      </body>
    </html>
  );
}
