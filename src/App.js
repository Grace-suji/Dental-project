
import Home from "./Components/Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import About from './Components/About'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Virtualtour from "./Components/Virtualtour";
import Event from "./Components/Event"
import Smile from "./Components/Smile"
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
          <Route path="/virtual-tour" element={<Virtualtour/>}/>
          <Route path="/events" element={<Event/>}/>
          <Route path="/smile-gallery" element={<Smile/>}/>
        </Routes>
      </Router>
      <Footer/>
      
      
    </div>
  );
}

export default App;
