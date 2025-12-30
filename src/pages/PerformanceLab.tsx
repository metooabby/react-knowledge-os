import ExpensiveList from "../components/ui/ExpensiveList";
import { useSearch } from "../hooks/useSearch";

const DATA = Array.from({ length: 2000 }, (_, i) => `Item ${i + 1}`);

export default function Home() {
  const { query, updateQuery, results, isPending } = useSearch(
    DATA,
    (item, q) => item.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="space-y-6 p-8">
      <h2 className="text-2xl font-semibold">Advanced Hooks</h2>

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
