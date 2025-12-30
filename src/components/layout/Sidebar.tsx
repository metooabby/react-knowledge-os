import { useTheme } from "../../context/ThemeContext";

export default function Sidebar() {
    const { dark } = useTheme();

    return (
        <aside className="w-64 border-r bg-white p-6 dark:bg-gray-800">
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                Theme: {dark ? "Dark" : "Light"}
            </p>

            <nav>
                <ul className="space-y-3 font-medium">
                    <li className="cursor-pointer hover:text-blue-600">Home</li>
                    <li className="cursor-pointer hover:text-blue-600">Knowledge</li>
                    <li className="cursor-pointer hover:text-blue-600">Settings</li>
                </ul>
            </nav>
        </aside>
    );
}