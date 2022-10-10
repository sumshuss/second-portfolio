
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
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
        <Skill />
        <Footer />
  
    </div>
  );
}

export default App;
