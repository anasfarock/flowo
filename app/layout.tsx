import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const materialSymbols = () => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
  return link;
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Flowo - AI Automation for Business",
  description: "Harness the power of AI to streamline repetitive tasks and drive business growth.",
  keywords: ["automation", "AI", "business", "workflow"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className={`${inter.variable} font-display bg-background-light dark:bg-background-dark text-[#101922] dark:text-background-light antialiased`}
      >
        {children}
      </body>
    </html>
  );
}