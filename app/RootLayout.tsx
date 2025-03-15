import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";
import AntiInspect from "./AntiInspect";

const work_Sans = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StackScript | Tech & Code Blog",
  description:
    "StackScript is a blog where developers explore the latest in coding, software development, and tech innovations.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${work_Sans.className} antialiased bg-white dark:bg-[#0D0D2B] text-black dark:text-white mx-auto`}
      >
        {/* Inject AntiInspect Security */}
        <AntiInspect />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {/* Improved Disable DevTools */}
        <Script
          src="https://cdn.jsdelivr.net/npm/disable-devtool@latest"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
