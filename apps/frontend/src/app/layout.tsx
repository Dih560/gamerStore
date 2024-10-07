import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google';


export const metadata: Metadata = {
  title: "Gam3er.store",
  description: "Versão completa da loja Gam3r.store",
};

const font = Montserrat({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
