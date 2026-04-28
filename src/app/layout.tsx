import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zihad — Premium Web Developer",
  description: "Crafting high-performance web products with elite design and AI integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="site-shell">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
