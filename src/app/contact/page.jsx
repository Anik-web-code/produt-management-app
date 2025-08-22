"use client";

import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setLoading(false);
      return;
    }

    const SERVICE_ID = "service_74kmmfs";
    const TEMPLATE_ID = "template_qgo6n3n";
    const USER_ID = "b0wAz0nkwlBfCQpPX";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID).then(
      () => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      },
      () => {
        setSubmitStatus("error");
        setLoading(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    );
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-16 md:py-24 dark:bg-gray-900"
    >
      <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-900 dark:text-white drop-shadow-md">
        Get In Touch
      </h2>

      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Contact Info */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-10 flex flex-col justify-center space-y-8">
          <p className="text-lg text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
            I’d love to hear from you! Whether you have a question, want to
            discuss a project, or just want to say hi, feel free to reach out
            through any of the channels below or by using the contact form.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              <a
                href="mailto:alianik11star@gmail.com"
                className="text-gray-900 dark:text-gray-100 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                alianik11star@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              <a
                href="tel:+8801998739878"
                className="text-gray-900 dark:text-gray-100 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                +8801998-739878
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-green-500 w-6 h-6" />
              <a
                href="https://wa.me/8801998739878"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-gray-100 font-semibold hover:text-green-600 transition"
              >
                +8801998-739878
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-10 flex flex-col gap-6"
          noValidate
        >
          <label className="flex flex-col">
            <span className="text-gray-900 dark:text-gray-100 font-semibold mb-1">
              Name
            </span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition shadow-sm hover:shadow-md"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-gray-900 dark:text-gray-100 font-semibold mb-1">
              Email
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition shadow-sm hover:shadow-md"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-gray-900 dark:text-gray-100 font-semibold mb-1">
              Message
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              placeholder="Write your message here..."
              className="rounded-md border border-gray-300 dark:border-gray-600 px-4 py-3 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none transition shadow-sm hover:shadow-md"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className={`self-start bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition flex items-center gap-3 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
            ) : (
              "Send Message"
            )}
          </button>

          {submitStatus === "success" && (
            <p className="mt-4 text-green-600 font-semibold animate-fadeIn">
              Message sent successfully!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="mt-4 text-red-600 font-semibold animate-fadeIn">
              Oops! Something went wrong or some fields are missing.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
