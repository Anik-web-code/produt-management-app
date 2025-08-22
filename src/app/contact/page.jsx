export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="mb-6">
        You can reach me via email or phone:
      </p>
      <ul className="text-lg">
        <li>Email: <a href="mailto:youremail@example.com" className="text-blue-500 underline">youremail@example.com</a></li>
        <li>Phone: +880 1234 567890</li>
      </ul>
    </div>
  );
}
