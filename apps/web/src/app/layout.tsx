import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Votorantim Futebol | Engajamento B2B",
    description: "Plataforma de incentivo e prêmios Votorantim Cimentos",
    manifest: "/manifest.json",
    themeColor: "#002C5B",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
