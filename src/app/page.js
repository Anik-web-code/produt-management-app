"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data.slice(0, 3)); // take first 3 products
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-left text-left bg-cover bg-center pl-10"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/NG4HGnmy/nike-debuts-first-ever-self-lacing-shoe-01.webp')",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl px-6"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          >
            Discover Premium <span className="text-blue-400">Products</span>
            That Redefine Your Lifestyle
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-200"
          >
            Elevate your everyday life with our handpicked collection of premium
            products — crafted to inspire, impress, and excite.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-left gap-4"
          >
            <Link
              href="/products"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg shadow-lg hover:opacity-90 transition"
            >
              🛒 Shop Products
            </Link>
            <Link
              href="/login"
              className="px-8 py-3 rounded-xl bg-white text-gray-900 font-semibold text-lg shadow-lg hover:bg-gray-100 transition"
            >
              🔑 Login
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            🔥 Top Selling Products
          </motion.h2>

          {/* Product Grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                {/* Image */}
                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition">
                  <h3 className="text-xl font-semibold text-white">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-lg font-bold text-blue-300">
                    ${product.price.toFixed(2)}
                  </p>
                  <Link
                    href={`/products/${product.id}`}
                    className="mt-4 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-md hover:opacity-90"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Link
              href="/products"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg shadow-lg hover:opacity-90 transition"
            >
              👀 View All Products
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
