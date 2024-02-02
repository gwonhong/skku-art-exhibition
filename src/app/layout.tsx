import type { Metadata } from "next";
import "./globals.css";

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
      {children}
    </html>
  );
}
