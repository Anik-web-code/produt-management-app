"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 mt-20 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <p className="text-lg font-semibold text-white">
          &copy; {new Date().getFullYear()} StealDeal. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Optional small tagline */}
      <p className="mt-6 text-sm text-gray-500 text-center">
        Crafted with ❤️ by StealDeal Team
      </p>
    </footer>
  );
}
