import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from "./pages/Home";
import Amadee24 from "./pages/Amadee24";
import Programs from "./pages/Programs";
import About from "./pages/About/About";
import ContactUs from "./pages/Contact/ContactUs";
import MyChatComponent from "./components/Chat/Chat";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/amadee" element={<Amadee24 />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <MyChatComponent/>
      <Footer />
    </div>
  );
}

export default App;
