import type { Metadata } from "next";
import "./globals.css";
import ScreenSizeIndicator from "@/components/ScreenSizeIndicator";
import { MainLayout } from "@/components/layout/MainLayout";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Onko.es - Oncología Especializada en Guadalajara",
  description: "Centro especializado en oncología, cirugía oncológica y radio-oncología en Guadalajara, Jalisco. Atención médica integral para pacientes con cáncer.",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`antialiased`}>
        <MainLayout>
          {children}
        </MainLayout>
        <ScreenSizeIndicator />
      </body>
    </html>
  );
}
