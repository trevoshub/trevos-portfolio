
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tochi | Software Developer & AI Automation Specialist",
  description:
    "Portfolio of Tochi, a software developer and AI automation specialist building web applications, AI assistants, and business automation systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

