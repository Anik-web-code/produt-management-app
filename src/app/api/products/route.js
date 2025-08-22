export const runtime = "nodejs";
import fs from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "src/data/products.json");

export async function GET() {
  const products = JSON.parse(fs.readFileSync(dataFile, "utf-8"));
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.name || !body.description || isNaN(body.price)) {
      return new Response(JSON.stringify({ error: "Invalid data" }), { status: 400 });
    }

    const products = JSON.parse(fs.readFileSync(dataFile, "utf-8"));
    const newProduct = { id: products.length + 1, ...body };
    products.push(newProduct);
    fs.writeFileSync(dataFile, JSON.stringify(products, null, 2));

    return new Response(JSON.stringify(newProduct), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
