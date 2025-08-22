"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", description: "", price: "" });

  // Redirect if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return null; // Don't render form until authenticated

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, price: parseFloat(form.price) }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        toast.error(`Failed: ${errorData.error}`);
        return;
      }

      toast.success("✅ Product added!");
      router.push("/products");
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Network error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12">
      <div className="w-full max-w-lg p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 dark:text-white mb-8">
          Add New Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Product Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          />
          <textarea
            placeholder="Product Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
            rows={4}
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
