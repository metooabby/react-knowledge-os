import Header from './components/layout/Header';
import Sidebar from "./components/layout/Sidebar"
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Header />

        <div className="flex flex-1">
          <Sidebar />
          <Home />
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App
