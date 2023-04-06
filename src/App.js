import Navbar from './components/Nabar';
import './App.css';
import Banner from './components/Banner';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio'
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div> 
    <Navbar/>
    <Banner/>
    <SocialLinks/>
    <About/>
    <Portfolio/>
    <Skills/>
   <Contact/>
    </div>
  );
}

export default App;
