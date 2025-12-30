import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold">404</h1>
      <p className="mb-6 text-gray-500">Page not found</p>

      <Link
        to="/"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}
