
import Home from "./Components/Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import About from './Components/About'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import "./App.css"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<About/>}/>
          <Route path="/contact-us" element={<Contact/>}/>
        </Routes>
      </Router>
      <Footer/>
      
      
    </div>
  );
}

export default App;
