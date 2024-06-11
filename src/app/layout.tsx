import type { Metadata } from "next";
import "./globals.css";
import { saira } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Casino",
  description: "Test Casino",
  openGraph: {
    images: ["/favicon.ico"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
