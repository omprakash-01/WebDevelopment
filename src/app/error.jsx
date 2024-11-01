"use client";
import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-10">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-2xl text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">Oops!</h2>
        <p className="text-lg font-semibold text-white mb-6">
          Something went wrong.
        </p>
        <p className="text-gray-300 mb-8">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={() => reset()}
          className="px-8 py-3 bg-blue-600 rounded-full text-white font-medium hover:bg-blue-700 transition-colors duration-200 ease-in-out shadow-lg mb-4"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-8 py-3 ml-10 border border-white text-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200 ease-in-out shadow-lg"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
