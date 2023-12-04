import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from "./pages/Home";
import About from "./pages/About/About";
import ContactUs from "./pages/Contact/ContactUs";

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/programs" element={<>programs</>} />
        <Route path="/amadee" element={<>amadee</>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
