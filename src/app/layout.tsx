import type { Metadata } from "next";
import "./globals.css";
import Header from "../../components/Header";

export const metadata: Metadata = {
  title: "taleweaver",
  description: "Story Teller AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen ">
        <Header />
        {children}
      </body>
    </html>
  );
}
