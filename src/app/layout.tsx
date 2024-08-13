import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hisab Kitaab",
  description: "An expense tracker application.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
