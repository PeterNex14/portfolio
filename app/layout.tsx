import type { Metadata } from "next";
import { Anton, Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";


const anton = Anton({
  weight: '400',
  variable: "--font-anton-sans",
  subsets: ["latin"]
})

const montserrat = Montserrat({
  variable: "--font-montserrat-mono",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Portfolio | Gabsee",
  description: "Peter Gabriel Sompotan Portfolio's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${anton.variable} antialiased flex flex-col h-screen`}
      >
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
