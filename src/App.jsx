import { useState,useEffect } from 'react';
import './App.css';
import Home from './components/pages/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ControlledAccordion from './components/menu/Accordion';
import { Switch,Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import NewId from './components/pages/new-id/NewId';

function App() {
  const [identifiant, setIdentifiant] = useState("");
  const [nom, setNom] = useState("");
  const [alcools, setAlcools] = useState("");
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    Aos.init({duration: 1000})
  }, []);

  return (
    <main className="container">
    <Navbar />
    <Switch>
      <Route exact path="/">
      <Home 
        id={identifiant}
        nom={nom}
        alcools={alcools}
        connected={connected}
        setId={setIdentifiant}
        setNom={setNom}
        setAlcools={setAlcools}
        setConnected={setConnected}
        />
      </Route>
      <Route path="/carte">
      {connected ? <ControlledAccordion /> : <Redirect to="/"></Redirect>}
      </Route>
      <Route path="/inscription">
      <NewId />
      </Route>
    </Switch>
    </main>
  );
}

export default App;
