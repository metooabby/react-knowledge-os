import { useState } from "react"

export default function Header() {
    const [dark, setDark] = useState(false);

    return (
        <header
            className={`border-b px-6 py-4 shadow-sm ${dark ? "bg-gray-900 text-white" : "bg-white"
                }`}
        >
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">React Knowledge OS</h1>

                <button
                    onClick={() => setDark(!dark)}
                    className="rounded border px-3 py-1 text-sm hover:bg-gray-100"
                >
                    Toggle Theme
                </button>
            </div>
        </header>
    )
}