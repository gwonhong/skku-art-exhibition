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
      <body className={`${inter.className} flex h-screen`}>
        <div className="h-full overflow-y-auto text-right pr-4">
          <NavBar />
        </div>
        <div className="h-full overflow-y-auto flex-1 border-l border-black">{children}</div>
      </body>
    </html>
  );
}
