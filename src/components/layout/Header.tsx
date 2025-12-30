import { useTheme } from '../../context/ThemeContext'

export default function Header() {
  const { dark, toggleTheme } = useTheme();

  return (
    <header className="border-b bg-white px-6 py-4 shadow-sm dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">React Knowledge OS</h1>

        <button
          onClick={toggleTheme}
          className="rounded border px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  )
}