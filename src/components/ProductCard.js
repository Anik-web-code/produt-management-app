import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded p-4">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-lg font-bold">${product.price}</p>
      <Link
        href={`/products/${product.id}`}
        className="text-blue-600 underline mt-2 inline-block"
      >
        Details
      </Link>
    </div>
  );
}
