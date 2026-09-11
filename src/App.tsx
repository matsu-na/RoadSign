import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import Search from './pages/Search';
import Features from './pages/Features';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:id" element={<Category />} />
              <Route path="/search" element={<Search />} />
              <Route path="/features" element={<Features />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
