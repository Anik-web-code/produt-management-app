"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ShoppingCart, Star, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return <p className="text-center py-20 text-xl animate-pulse">Loading...</p>;
  if (!product)
    return <p className="text-center py-20 text-red-500">Product not found</p>;

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Product Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl overflow-hidden shadow-xl"
      >
        <img
          src={product.imageUrl || "/placeholder.jpg"}
          alt={product.name}
          width={600}
          height={600}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full shadow-md">
          🔥 Best Seller
        </span>
      </motion.div>

      {/* Product Info */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
          {product.name}
        </h1>

        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={22} fill="gold" />
          ))}
          <span className="ml-2 text-gray-600 dark:text-gray-300">
            (120+ Reviews)
          </span>
        </div>

        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          {product.description}
        </p>

        {/* Price */}
        <p className="text-3xl font-bold text-red-600 mb-6">
          ${product.price.toFixed(2)}
          <span className="text-lg text-gray-400 line-through ml-3">
            ${(product.price * 1.5).toFixed(2)}
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-red-700 shadow-lg transition-all">
            <ShoppingCart size={20} /> Buy Now
          </button>
          <button className="border border-gray-400 dark:border-gray-600 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
            Add to Wishlist
          </button>
        </div>

        {/* Extra Trust Badges */}
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-green-500" /> Secure Payment
          </div>
          <div className="flex items-center gap-2">
            🚚 Free Delivery
          </div>
          <div className="flex items-center gap-2">
            🔄 7-Day Easy Return
          </div>
        </div>
      </motion.div>
    </div>
  );
}
