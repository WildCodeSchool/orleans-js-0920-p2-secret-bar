import { useEffect } from 'react';
import './App.css';
import Home from './components/pages/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';

const users = 
  {
    name: 'Robert Reyes',
    avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
    commentaire: 'La soirée était formidable',
    note:3,
  };
  
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
