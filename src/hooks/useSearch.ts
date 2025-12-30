import { useMemo, useState, useTransition } from "react";

export function useSearch<T>(
  data: T[],
  matcher: (item: T, query: string) => boolean
) {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const results = useMemo(() => {
    if (!query) return data;

    return data.filter((item) => matcher(item, query));
  }, [data, matcher, query]);

  function updateQuery(value: string) {
    startTransition(() => {
      setQuery(value);
    });
  }

  return {
    query,
    updateQuery,
    results,
    isPending,
  };
}
