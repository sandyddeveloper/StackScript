"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import Link from "next/link";
import { Search} from "lucide-react";
import Image from "next/image";

const links = [
  { displayName: "Home", href: "/" },
  { displayName: "Blog", href: "/blog" },
  { displayName: "About", href: "/about" },
  { displayName: "Contact", href: "/contact" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="flex  justify-between items-center py-6 px-5 md:px-10 w-full dark:border-gray-700 bg-white dark:bg-[#0D0D2B] ">
      {/* Logo Section */}
      <Link href={"/"} className="flex items-center space-x-3">
      <Image
  src="/Logo.png" // ✅ No "/public" in the path
  alt="StackScripts Logo"
  width={40}
  height={40}
  className="w-10 h-10"
/>

  <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">
    Stack<span className="text-blue-500">Scripts</span>
  </span>
</Link>


      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8">
        {links.map((link, idx) => (
          <Link
            href={link.href}
            key={idx}
            className="text-gray-700 z-[10001] dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
          >
            {link.displayName}
          </Link>
        ))}
      </nav>

      {/* Search Bar + Theme Toggle */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="focus:outline-none z-[10001]"
          aria-label="Toggle theme"
        >
          <Image
            src={theme === "light" ? "/light-toggle.svg" : "/dark-toggle.svg"}
            alt="theme toggle"
            width={48}
            height={28}
            priority
          />
        </button>
      </div>
    </header>
  );
}
