
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Insurance from './components/Insurance/Insurance';
import Home from './components/Home/Home';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/insurance" element={<Insurance />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
