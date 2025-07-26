import Home from "./component/Home";
import About from "./component/About";
import Project from "./component/Project";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Footer from "./component/Footer";


export default function App() {
  return (
    <div>
      <Navbar />

        <Home />
  
    
        <About />
  
         <Skills/>
        <Project />
       <Footer/>
    </div>
  );
}

