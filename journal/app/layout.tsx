import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Jost, Montserrat, Poppins } from "next/font/google";

const mont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mont",
});

const jSans = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-jSans",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-jSans",
});

export const metadata: Metadata = {
  title: "Mood v2",
  description: "The best app for tracking your mood throughout your life!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="overflow-x-hidden">
        <body
          className={`${mont.variable} ${jSans.variable} ${jost.variable} font-mont`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
