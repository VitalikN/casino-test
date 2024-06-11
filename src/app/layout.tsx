import type { Metadata } from "next";
import "./globals.css";
import { saira } from "@/utils/fonts";
import ReduxProvider from "@/redux/ReduxProvider/ReduxProvider";
import Footer from "@/components/Footer";

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
        <ReduxProvider>
          <main>{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
