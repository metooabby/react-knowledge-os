import { useMemo, useState, useTransition } from "react";
import ExpensiveList from "../components/ui/ExpensiveList";

const DATA = Array.from({ length: 2000 }, (_, i) => `Item ${i + 1}`);

export default function Home() {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const filtered = useMemo(() => {
    return DATA.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="space-y-6 p-8">
      <h2 className="text-2xl font-semibold">Concurrent Rendering</h2>

      <input
        value={query}
        onChange={(e) =>
          startTransition(() => {
            setQuery(e.target.value);
          })
        }
        placeholder="Search..."
        className="w-full rounded border px-3 py-2"
      />

      {isPending && (
        <p className="text-sm text-gray-500">Updating results…</p>
      )}

      <ExpensiveList items={filtered} />
    </div>
  );
}
