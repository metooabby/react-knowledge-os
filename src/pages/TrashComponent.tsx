import { useState } from "react";
import ExpensiveList from "../components/ui/ExpensiveList";
import CrashTest from "../components/ui/CrashTest";
import ErrorBoundary from "../components/ui/ErrorBoundary";
import { useSearch } from "../hooks/useSearch";

const DATA = Array.from({ length: 2000 }, (_, i) => `Item ${i + 1}`);

export default function Home() {
  const [crash, setCrash] = useState(false);

  const { query, updateQuery, results, isPending } = useSearch(
    DATA,
    (item, q) => item.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="space-y-6 p-8">
      <h2 className="text-2xl font-semibold">Resilient UI</h2>

      <button
        onClick={() => setCrash(true)}
        className="rounded bg-red-600 px-4 py-2 text-white"
      >
        Trigger Crash
      </button>

      <ErrorBoundary
        fallback={
          <div className="rounded bg-red-100 p-4 text-red-800 dark:bg-red-900 dark:text-red-100">
            Component crashed safely.
          </div>
        }
      >
        <CrashTest shouldCrash={crash} />
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
