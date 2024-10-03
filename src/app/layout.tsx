import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Header } from "@/components/navigation";
import { NavigationProvider } from "@/providers/navigation-provider";

const playfairDisplay = localFont({
  src: "./fonts/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-playfair",
  weight: "600",
});

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  weight: "400 500",
});

type LayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "PAX & WELLS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${satoshi.variable} antialiased bg-primary`}
      >
        <NavigationProvider>
          <Header />
          {children}
        </NavigationProvider>
        <Footer />
      </body>
    </html>
  );
}
