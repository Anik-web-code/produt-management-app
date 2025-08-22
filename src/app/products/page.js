"use client";

import Link from "next/link";
import { useState } from "react";

//Products data
const mockProducts = [
  { id: 1, name: "Product 1", description: "Description of product 1", price: 19.99 },
  { id: 2, name: "Product 2", description: "Description of product 2", price: 29.99 },
  { id: 3, name: "Product 3", description: "Description of product 3", price: 39.99 },
];

export default function ProductsPage() {
  const [products] = useState(mockProducts);

  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-10">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <p className="mb-2">{product.description}</p>
            <p className="font-bold mb-4">${product.price.toFixed(2)}</p>
            <Link
              href={`/products/${product.id}`}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
