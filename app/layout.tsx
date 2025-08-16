import TopNav from "@/components/shared/top-nav";
import { euclidCircularB } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Myxellia",
    default: "Myxellia"
  },
  description:
    "Myxellia is a modern, intuitive financial management platform designed to empower users with comprehensive tools for budgeting, expense tracking, and insightful financial analysis.",
  openGraph: {
    title: "Myxellia",
    description:
      "Myxellia is a modern, intuitive financial management platform designed to empower users with comprehensive tools for budgeting, expense tracking, and insightful financial analysis.",
    url: "https://myxellia.com",
    siteName: "Myxellia",
    locale: "en-US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${euclidCircularB.className} animate-in fade-in-0 antialiased duration-300`}
        suppressHydrationWarning
      >
        <TopNav />
        {children}
      </body>
    </html>
  );
}
