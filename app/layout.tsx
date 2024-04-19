import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen Music",
  icons:{
    icon: ['/icon/favicon.ico?v=4',],
    apple: ['/icon/apple-touch-icon.png?v=4',],
    shortcut: ['/icon/apple-touch-icon.png']

  },
  manifest: '/icon/site.webmanifest'
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
