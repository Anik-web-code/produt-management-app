"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 dark:bg-gray-900/20 backdrop-blur-md shadow-md">
      <div className="max-w-[1435px] text-blue-500 mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold dark:text-white hover:text-blue-400 transition"
        >
          Steal<span className="text-blue-500">Deal</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden text-blue-500 font-medium text-[17px] md:flex gap-6 items-center dark:text-white">
          <li>
            <Link href="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/products" className="hover:text-blue-400 transition">
              Products
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/add-product"
              className="hover:text-blue-400 transition"
            >
              Add Product
            </Link>
          </li>

          {/* Login/Logout Button */}
          {!session ? (
            <Link href="/login">
              <button
                to="/login"
                className="ml-4 px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700 transition"
              >
                Login
              </button>
            </Link>
          ) : (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="ml-4 px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="text-blue-500 md:hidden bg-white/10  dark:bg-gray-900/20 backdrop-blur-md px-6 py-4 flex flex-col gap-4 dark:text-white">
          <li>
            <Link
              href="/"
              className="text-blue-500 hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/add-product"
              className="hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Add Product
            </Link>
          </li>

          {/* Mobile Login/Logout */}
          {!session ? (
            <Link href="/login">
              <button
                // onClick={() => {
                //   signIn("google", { callbackUrl: "/products" });
                //   setMenuOpen(false);
                // }}

                className="mt-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
              >
                Login
              </button>
            </Link>
          ) : (
            <button
              onClick={() => {
                signOut({ callbackUrl: "/" });
                setMenuOpen(false);
              }}
              className="mt-2 px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          )}
        </ul>
      )}
    </nav>
  );
}
