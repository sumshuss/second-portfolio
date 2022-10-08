
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
// import { Footer } from './components/Footer';
import { About, Footer, Skill, Work } from './container';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <About /> 
        <Skills />
        <Work />
        <Projects />
        <Skill />
        {/* <Contact /> */}
        <Footer />
  
    </div>
  );
}

export default App;
