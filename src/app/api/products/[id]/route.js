export const runtime = "nodejs";
import fs from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "src/data/products.json");

export async function GET(req, { params }) {
  try {
    const products = JSON.parse(fs.readFileSync(dataFile, "utf-8"));
    const productId = parseInt(params.id, 10);

    const product = products.find((p) => p.id === productId);
    if (!product) {
      return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
