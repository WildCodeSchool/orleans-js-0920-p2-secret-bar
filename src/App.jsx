import './App.css';
import Favicon from 'react-favicon';
import { Switch, Route } from 'react-router-dom';
import Menu from './components/pages/Menu';
import NewId from './components/pages/New-id/NewId';
import Home from './components/pages/Home';
import Portfolio from './components/visitorsbook/Portfolio'
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [identifiant, setIdentifiant] = useState("");
  const [nom, setNom] = useState("");
  const [alcools, setAlcools] = useState("");
  const [connected, setConnected] = useState(false);
  

  useEffect(() => {
    Aos.init({duration: 1000})
  }, []);
  return (
    <div className="App">
      <Favicon url="http://sendpictures.free.fr/up/1605189215.ico" />
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
        <Route path="/carte" component={Menu}></Route>
        <Route path="/new-id" component={NewId}></Route>
        <Route path="/livre-d-or" component={Portfolio}><Portfolio/></Route>
      </Switch>
    </div>
  );
}


export default App;
