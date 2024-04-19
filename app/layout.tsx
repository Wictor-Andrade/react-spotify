import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className='bg-black text-zinc-50'>{children}</body>
    </html>
  );
}
