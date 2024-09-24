import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/libs/registry";

import Header from '@/components/organisms/Header'
import Footer from "@/components/organisms/Footer";

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "FumiBlog",
    description: "A space to share daily learnings",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={notoSansJp.className}>
                <StyledComponentsRegistry>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
