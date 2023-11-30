import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<>about</>} />
        <Route path="/programs" element={<>programs</>} />
        <Route path="/amadee" element={<>amadee</>} />
        <Route path="/contact" element={<>contact</>} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
