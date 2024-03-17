import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Banner from "@/components/Banner";

export const metadata: Metadata = {
  title: "Martyred",
  description: "A christian clothing brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Banner />
        <Nav />
        {children}
      </body>
    </html>
  );
}
