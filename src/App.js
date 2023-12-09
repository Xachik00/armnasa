
import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from "./pages/Home";
import Amadee24 from "./pages/Amadee24";
import Programs from "./pages/Programs";
import About from "./pages/About/About";
import ContactUs from "./pages/Contact/ContactUs";
import MyChatComponent from "./components/Chat/Chat";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { useEffect} from "react";
import useAuth from "./hooks/AdminHooks/useAuth";


function App() {
  useEffect(()=>{
    if(window.location.pathname!=='/admin'){
      localStorage.removeItem('addLang')
    }
  },[])
  const { auth }=useAuth()

  
  return (
    <div className="App">
      { auth?.role =='admin'?<></>:<Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/amadee" element={<Amadee24 />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin" element={!auth?.accessToken ? <Login /> : < Admin />} />
      </Routes>
{     auth?.role =='admin'&& <MyChatComponent/>}
      {auth?.role =='admin'?<></>:<Footer />}
    </div>
  );
}

export default App;
