import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from "./pages/Home";
import Amadee24 from "./pages/Amadee24";
import Programs from "./pages/Programs";

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<>about</>} />
        <Route path="/programs" element={<Programs/>} />
        <Route path="/amadee" element={<Amadee24/>} />
        <Route path="/contact" element={<>contact</>} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
