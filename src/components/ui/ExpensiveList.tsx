import { memo } from "react";

type Props = {
  items: string[];
};

function ExpensiveList({ items }: Props) {
  console.log("ExpensiveList rendered");

  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded bg-white p-3 shadow-sm dark:bg-gray-800"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default memo(ExpensiveList);
