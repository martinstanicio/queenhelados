import { Analytics } from "@vercel/analytics/react";

import { Poppins } from "next/font/google";

import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

import "./globals.css";

const bodyFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

export { metadata } from "@/lib/metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cn(bodyFont.variable, "pattern antialiased")}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
