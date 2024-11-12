import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans_init = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '500'],
  variable: '--font-dm_sans'
});


export const metadata: Metadata = {
  title: "Klinik Psikologi Sejahtera",
  description: "klinik psikologi terbaik didunia!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans_init.variable}>
        <main className="cm_sans">
        {children}
        </main>
      </body>
    </html>
  );
}
