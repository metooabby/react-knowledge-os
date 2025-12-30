import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Header />

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}
