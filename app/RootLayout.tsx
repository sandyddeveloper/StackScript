import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";

const work_Sans = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StackScript | Tech & Code Blog",
  description:
    "StackScript is a blog where developers explore the latest in coding, software development, and tech innovations. Stay updated with tutorials, insights, and best practices.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    // Prevent Right-Click
    const preventRightClick = (event: MouseEvent) => event.preventDefault();

    // Block Keyboard Shortcuts
    const preventKeyShortcuts = (event: KeyboardEvent) => {
      if (
        event.ctrlKey &&
        ["u", "s", "p", "Shift"].includes(event.key.toLowerCase())
      ) {
        event.preventDefault();
      }
      if (
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && ["I", "J", "C"].includes(event.key))
      ) {
        event.preventDefault();
        alert("DevTools are disabled!");
      }
    };

    // Detect DevTools Opening
    const detectDevTools = () => {
      if (
        window.outerWidth - window.innerWidth > 100 ||
        window.outerHeight - window.innerHeight > 100
      ) {
        alert("DevTools detected! Closing...");
        window.close();
      }
    };

    // Debugger Trick (Infinite Loop)
    const debugBlocker = () => {
      setInterval(() => {
        debugger;
      }, 100);
    };

    // Add Event Listeners
    document.addEventListener("contextmenu", preventRightClick);
    document.addEventListener("keydown", preventKeyShortcuts);
    window.addEventListener("resize", detectDevTools);

    // Start Debugging Protection
    debugBlocker();

    return () => {
      document.removeEventListener("contextmenu", preventRightClick);
      document.removeEventListener("keydown", preventKeyShortcuts);
      window.removeEventListener("resize", detectDevTools);
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${work_Sans.className} antialiased bg-white dark:bg-[#0D0D2B] text-black dark:text-white mx-auto`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Script
          src="https://cdn.jsdelivr.net/npm/disable-devtool@latest"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
