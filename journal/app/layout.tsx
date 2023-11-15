import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";

const aSans = localFont({
  src: [
    {
      path: "../assets/fonts/argentumSans/ArgentumSans-ExtraLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/argentumSans/ArgentumSans-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/argentumSans/ArgentumSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aSans",
  display: "swap",
});

const cVintage = localFont({
  src: "../assets/fonts/camarVintage/Camar.otf",
  variable: "--font-cVintage",
  display: "swap",
});

const mont = localFont({
  src: [
    {
      path: "../assets/fonts/mont/MontExtraLight.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/mont/MontHeavy.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mont",
  display: "swap",
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
          className={`${aSans.variable} ${cVintage.variable} ${mont.variable} font-aSans`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
