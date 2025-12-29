export default function Sidebar() {
    return (
        <aside className="w-64 border-r bg-white p-6">
            <nav>
                <ul className="space-y-3 font-medium">
                    <li className="cursor-pointer text-gray-700 hover:text-black">
                        Home
                    </li>
                    <li className="cursor-pointer text-gray-700 hover:text-black">
                        Knowledge
                    </li>
                    <li className="cursor-pointer text-gray-700 hover:text-black">
                        Settings
                    </li>
                </ul>
            </nav>
        </aside>
    )
}