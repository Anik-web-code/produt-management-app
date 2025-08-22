"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 text-center py-6 mt-10">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
}
