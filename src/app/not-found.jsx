import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-10">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-500 opacity-75 mb-4 animate-bounce">
          404
        </h1>
        <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-lg mb-6 text-gray-300">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-8 py-3 bg-blue-600 rounded-full text-white font-medium hover:bg-blue-700 transition-colors duration-200 ease-in-out shadow-lg"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
