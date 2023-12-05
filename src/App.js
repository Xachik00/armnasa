import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from "./pages/Home";
import MyChatComponent from "./components/Chat/Chat";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<>about</>}/>
        <Route path="/programs" element={<>programs</>}/>
        <Route path="/amadee" element={<>amadee</>}/>
        <Route path="/contact" element={<>contact</>}/>
        <Route path="/chat" element={<MyChatComponent/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
