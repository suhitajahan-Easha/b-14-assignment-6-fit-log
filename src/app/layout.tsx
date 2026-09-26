import type { Metadata } from "next";
import { Geist, Geist_Mono ,Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar";
import ContextApi from "@/Context/ContextApi";
import Footer from "@/Components/Shared/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ["700"],
  variable: '--font-oswald',
  display: 'swap',
})
export const metadata: Metadata = {
  title: "FitLog",
  description: "A modern workout library and tracking application built for keeping gym workouts organized, accessible, and easy to manage.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-[#0B0D10] text-white">
         <ContextApi>
          <Navbar></Navbar>
          {children}
          <ToastContainer />
          <Footer></Footer>
         </ContextApi>
        
        </body>
    </html>
  );
}
