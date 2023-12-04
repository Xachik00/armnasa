import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from "./pages/Home";
import Amadee24 from "./pages/Amadee24";
import Programs from "./pages/Programs";
import Contact2 from "./components/contact2/Contact2";

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
        <Route path="/contact2" element={<Contact2/>} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
