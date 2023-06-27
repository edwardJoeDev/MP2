import logo from './logo.svg';
import './App.css';
import Heading from './Components/Heading';
import NavBar from './Components/Nav';
import Welcome from './Components/Welcome';
import About from './Components/About';

function App() {
  return (
    <div>
      <Heading />
      <NavBar />
      <Welcome />
      <About />
    </div>
  );
}

export default App;
