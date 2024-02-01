import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SKKU art exhibition",
  description: "SKKU art exhibition archive website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <div
          className="flex-none h-screen overflow-y-auto w-96 text-right"
        >
          <NavBar />
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </body>
    </html>
  );
}
