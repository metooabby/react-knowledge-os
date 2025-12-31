import { useTheme } from "../../context/ThemeContext";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const { dark } = useTheme();
  const linkBase = "block rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700";
  return (
    <aside className="w-64 border-r bg-white p-6 dark:bg-gray-800">
      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        Theme: {dark ? "Dark" : "Light"}
      </p>

      <nav>
        <ul className="space-y-3 font-medium">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "bg-gray-200 dark:bg-gray-700" : ""}`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/knowledge"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "bg-gray-200 dark:bg-gray-700" : ""}`
              }
            >
              Knowledge
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "bg-gray-200 dark:bg-gray-700" : ""}`
              }
            >
              Settings
            </NavLink>
          </li>
             <li>
            <NavLink
              to="/performancelab"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "bg-gray-200 dark:bg-gray-700" : ""}`
              }
            >
              Performance Lab
            </NavLink>
          </li>
             <li>
            <NavLink
              to="/trashComponent"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "bg-gray-200 dark:bg-gray-700" : ""}`
              }
            >
              Crash Component
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}