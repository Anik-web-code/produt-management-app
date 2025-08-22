"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl mb-4">Login</h2>

      {/* Google Login */}
      <button
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="px-4 py-2 bg-blue-600 text-white rounded mb-2"
      >
        Sign in with Google
      </button>

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
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Sign in with Credentials (admin/admin)
      </button>
    </div>
  );
}
