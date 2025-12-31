import { Suspense } from "react";
import UserProfile from "../components/ui/UserProfile";
import ExpensiveList from "../components/ui/ExpensiveList";
import ErrorBoundary from "../components/ui/ErrorBoundary";
import { useSearch } from "../hooks/useSearch";

const DATA = Array.from({ length: 2000 }, (_, i) => `Item ${i + 1}`);

export default function Home() {
  const { query, updateQuery, results, isPending } = useSearch(
    DATA,
    (item, q) => item.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="space-y-6 p-8">
      <h2 className="text-2xl font-semibold">Suspense & Streaming</h2>

      <ErrorBoundary
        fallback={
          <div className="rounded bg-red-100 p-4 text-red-800">
            Failed to load profile.
          </div>
        }
      >
        <Suspense
          fallback={
            <div className="rounded bg-gray-100 p-6 text-gray-500 dark:bg-gray-800">
              Loading profile…
            </div>
          }
        >
          <UserProfile />
        </Suspense>
      </ErrorBoundary>

      <input
        value={query}
        onChange={(e) => updateQuery(e.target.value)}
        placeholder="Search..."
        className="w-full rounded border px-3 py-2"
      />

      {isPending && (
        <p className="text-sm text-gray-500">Updating results…</p>
      )}

      <ExpensiveList items={results} />
    </div>
  );
}
