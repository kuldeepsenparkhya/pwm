import './App.css';
import HeaderBar from './components/headerBar';
import About from './pages/About';
import ContactUS from './pages/ContactUS';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Service from './pages/Service';
import Skill from './pages/skills';

function App() {
  return (
    <>
      <HeaderBar />
      <Home />
      <About />
      <Service />
      <Resume />
      <Skill />
      <ContactUS/>
    </>
  );
}

export default App;
