// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About"
// pages
import './App.css'
// blank

// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="blank bg-no-repeat bg-cover overflow-hidden">

      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App;



