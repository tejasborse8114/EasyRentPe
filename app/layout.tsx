import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://easyrentpe.example.com"),
  title: {
    default: "Easy RentPe — The Complete Operating System for Hostels & PGs",
    template: "%s | Easy RentPe",
  },
  description:
    "Easy RentPe is an all-in-one platform for hostel and PG owners to manage tenants, rooms, rent, dues, complaints, and agreements — from one dashboard.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-sans">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
