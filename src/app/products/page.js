"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition relative overflow-hidden group"
          >
            {/* Product Image */}
            <div className="w-full h-56 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                {product.description}
              </p>
              <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-4">
                ${product.price.toFixed(2)}
              </p>
              <Link
                href={`/products/${product.id}`}
                className="inline-block px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
