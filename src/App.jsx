import { useEffect } from 'react';
import './App.css';
import Home from './components/pages/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Favicon from 'react-favicon';

function App() {
  useEffect(() => {
    Aos.init({duration: 1000})
  }, []);

  return (
    <main className="container">
      <Favicon url="http://sendpictures.free.fr/up/1605189215.ico" />
      <Home />
    </main>
  );
}

export default App;
