import "../styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FirstChild from "./FirstChild";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OSINT Industries",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FirstChild>{children}</FirstChild>
      </body>
    </html>
  );
}
