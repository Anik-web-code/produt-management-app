"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 px-6">
      {/* Background overlay for effect */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full max-w-md p-10 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-6 drop-shadow-md">
          Welcome Back!
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
          Log in to access the best deals on StealDeal products
        </p>

        {/* Google Login */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="w-full flex items-center justify-center gap-3 px-5 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-md transition"
        >
          <img
            src="https://i.postimg.cc/50BYYCMx/sq-google-g-logo-update-dezeen-2364-col-0.jpg"
            alt="Google"
            className="w-6 h-6 rounded-full"
          />
          Sign in with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          <span className="mx-2 text-gray-500 dark:text-gray-400 font-semibold">
            OR
          </span>
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
        </div>

        {/* Credentials Login */}
        <button
          onClick={() =>
            signIn("credentials", {
              redirect: true,
              username: "admin",
              password: "admin",
              callbackUrl: "/products",
            })
          }
          className="w-full px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-md transition"
        >
          Sign in with Credentials
        </button>

        {/* Optional small note */}
        <p className="mt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
          Use Google or the default admin credentials to test
        </p>
      </div>
    </div>
  );
}
