import "../styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FirstChild from "./FirstChild";
import OG from "../../public/opengraph.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OSINT Industries",
  description: "Landing page demo by Franics Onukwu",
  icons: {
    icon: "/icon.png",
  },
  metadataBase: new URL("https://sustainobles.com.ng/"),
  openGraph: {
    images: [
      {
        url: OG.src,
        width: OG.width,
        height: OG.height,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: OG.src,
        width: OG.width,
        height: OG.height,
      },
    ],
  },
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
