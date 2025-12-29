import Header from './components/layout/Header';
import Sidebar from "./components/layout/Sidebar"
import Footer from './components/layout/Footer';
import Home from './pages/Home';

function App() {

  return (
    <div className='flex min-h-screen flex-col bg-gray text-gray-900'>
      <Header />
      <div className='flex flex-1'>
        <Sidebar />
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
