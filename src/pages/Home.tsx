import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    return (
        <main className="flex-1 space-y-8 p-8">
            <section className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-medium">Counter</h3>

                <p className="mb-4">
                    Count: <span className="font-bold">{count}</span>
                </p>

                <button
                    onClick={() => setCount(count + 1)}
                    className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                    Increment
                </button>
            </section>

            <section className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-medium">Profile</h3>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {name && (
                    <p className="mt-3 text-gray-700">
                        Hello, <span className="font-semibold">{name}</span>
                    </p>
                )}
            </section>
        </main>
    );
}