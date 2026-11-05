import type { Metadata } from "next";
import "./globals.css",

export const metadata: Metadata = {
  title: "Context-Flow",
  description: "Your work, without losing context."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
