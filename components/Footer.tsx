"use client";

import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="py-8 px-6 md:px-16 bg-[#0D0D2B] text-gray-400 border-t border-gray-700 mt-10">
      <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/Logo.png"
            alt="StackScripts Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-2xl font-semibold text-white">
            Stack<span className="text-blue-500">Scripts</span>
          </span>
        </Link>

        {/* Policy Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 z-50">
          <Link href="/terms" className="hover:text-blue-400 transition duration-300">
            Terms of Use
          </Link>
          <Link href="/privacy-policy" className="hover:text-blue-500 transition duration-300">
            Privacy Policy
          </Link>
          <Link href="/cookie-policy" className="hover:text-blue-500 transition duration-300">
            Cookie Policy
          </Link>
          <Link href="/about-us" className="hover:text-blue-500 transition duration-300">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-blue-500 transition duration-300">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 md:space-x-5 z-50">
          <Link href="https://twitter.com/yourprofile" target="_blank">
            <FaTwitter className="w-6 h-6 text-gray-400 hover:text-blue-500 transition" />
          </Link>
          <Link href="https://github.com/yourprofile" target="_blank">
            <FaGithub className="w-6 h-6 text-gray-400 hover:text-gray-300 transition" />
          </Link>
          <Link href="https://linkedin.com/in/yourprofile" target="_blank">
            <FaLinkedin className="w-6 h-6 text-gray-400 hover:text-blue-500 transition" />
          </Link>
        </div>
      </div>

      {/* Centered Copyright */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © 2025 MetaBlog. All rights reserved.
      </div>
    </div>
  );
}
