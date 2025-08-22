export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-64 flex items-center justify-center bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">Welcome to Products App</h1>
      </section>

      {/* Product Highlights */}
      <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">Product 1</div>
        <div className="p-4 border rounded">Product 2</div>
        <div className="p-4 border rounded">Product 3</div>
      </section>
    </div>
  );
}
