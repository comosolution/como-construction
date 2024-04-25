import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageWrapper from "./components/wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoMo Solution GmbH – Under Construction",
  description: "Innovative Lösungen für Collaboration und Mobile Work",
  authors: [
    { name: "CoMo Solution GmbH", url: "https://www.como-solution.de" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className} id="top">
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
