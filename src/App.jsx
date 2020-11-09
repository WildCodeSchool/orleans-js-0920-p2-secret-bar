import { useEffect } from 'react';
import './App.css';
import Home from './components/pages/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({duration: 1000})
  }, []);

  return (
    <main className="container">
      <Home />
    </main>
  );
}

export default App;
