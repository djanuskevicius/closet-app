import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { WardrobeProvider } from "@/components/context/WardrobeContext";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "closet-app",
  description:
    "An app made in preparation for an application to Vinted Academy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <NavBar />
        <WardrobeProvider>{children}</WardrobeProvider>
        <Footer />
      </body>
    </html>
  );
}
