import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { TimelineLite } from "gsap";
import anime from "animejs";
import Connexion from '../../identifiants.json'
import LogoMini from '../Images/logo_mini';
import Navbar from "../Navbar/Navbar";
import ControlledCarousel from '../carousel/ControlledCarousel';
import Selection from "../selection/Selection";
import Formevent from "../event/Formevent";
import StaffList from "../staff/StaffList";
import Footer from "../footer/Footer";
import ServiceList from "../services/ServiceList";
import './Home.css';


const Home =  props => {

    let panelRight = null;
    let panelLeft = null;
    let transition = null;
    let btnEnter = null;
    let welcome = null;
    let welcome_site = null;
    let formAcc = null;
    let phrase = null;
    let logoMini = null;
    let animation = null;
    let animWelcome = new TimelineLite({
        paused: true,
        onStart: () => {
          animation.play();
        }
      });
    let animEntreeSite = new TimelineLite({
        paused: true
      });

    const connected= props.connected;
    const id= props.id;
    const setId = props.setId;
    const setNom = props.setNom;
    const setAlcools = props.setAlcools;
    const setConnected = props.setConnected;
    const [identifiant, setIdentifiant] = useState("");
    const [errorForm, setErrorForm] = useState(null);

    useEffect(()=>{
        animation = anime({
            targets: ".st0",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "cubicBezier(.5, .05, .1, .3)",
            duration: 1500,
            autoplay: false,
      
            delay: function(el, i) {
              return i * 100;
            },
            complete: function(anim) {
              anim.reverse();
              return;
            }
          });
          animWelcome
            .from(
              formAcc,
              0.5,
              {
                opacity: 0,
                y: 25,
                ease: "power2.inOut"
              },
              "+=0.8"
            )
      
            .from(
              btnEnter,
              0.5,
              {
                opacity: 0,
                y: 25,
                ease: "power2.inOut"
              },
              "-=0.2"
            )
            .from(
              phrase,
              0.5,
              {
                opacity: 0,
                y: 25,
                ease: "power2.inOut"
              },
              "-=0.2"
            )
            .play();
            if(connected){
                var tl = new TimelineLite({});
                tl.to(welcome_site, 0.7, {
                    opacity: 1
                }).play();
            }
        }, [connected]);


    const handleChangeId = event => {
      setIdentifiant(event.target.value);

      Connexion.forEach(person => {
        const newPerson = person.id.substring(0, person.id.length - 1);
        if(newPerson === identifiant){
          setCustomer(person);
        }
      })
    };

    const valideForm = () => {
        
        Connexion.forEach(element => {
            if(element.id === identifiant){
                setId(identifiant);
                setNom(element.name);
                setAlcools(element.alcools);
            animEntreeSite
            .to(phrase, 0.5, { opacity: 0, y: 25 })
            .to(btnEnter, 0.5, { opacity: 0, y: 25 }, "-=0.2")
            .to(
                formAcc,
                0.5,
                {
                opacity: 0,
                y: 25
                },
                "-=0.2"
            )
            .to(logoMini, 0.5, { opacity: 0 }, "-=0.2")
            .to(panelRight, 0.7, { height: 0, ease: "power2.inOut" }, "pano+=0.5")
            .to(panelLeft, 0.7, { yPercent: 100, ease: "power2.inOut" }, "pano+=0.5")
            
            .to([transition, welcome], 0.1, {
                display: "none",
                onComplete: () => {
                setConnected(true);
                }
            })
            .play();
            }
        });
        if(id !== ""){
            setErrorForm("Mauvais identifiant");
        }
    };

    const useLocalStorage = (key, defaultValue) => {
      const stored = localStorage.getItem(key);
      const initial = stored ? JSON.parse(stored) : defaultValue;
      const [value, setValue] = useState(initial);
    
      useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
      }, [key, value]);
    
      return [value, setValue];
    };

    const [customer, setCustomer] = useLocalStorage("customer", {})

return( 
    <div className="Home">
    {!connected && (
    <div>
        <div className="transition" ref={div => (transition = div)}>
            <div className="panelLeft" ref={div => (panelLeft = div)}></div>
            <div className="panelRight" ref={div => (panelRight = div)}></div>
        </div>
        <div className="welcome" ref={div => (welcome = div)}>
            <div ref={div => (logoMini = div)}>
            <LogoMini />
            </div>

            <form className="form_welcome" ref={div => (formAcc = div)}>
            <div className="error"> {errorForm}</div>
            <label htmlFor="identifiant">Identifiant: </label>
            <input
                name="identifiant"
                type="text"
                value={identifiant}
                placeholder="Identifiant"
                onChange={handleChangeId}
            />
            </form>
            <button
            className="enter"
            onClick={valideForm}
            ref={div => (btnEnter = div)}
            attr-data-hover="Entrer"
            >
            Entrer
            </button>
            <div className="without_mp" ref={div => (phrase = div)}>
            <p>
                Vous n'avez pas encore d'identifiant, dommage !{"  "}

                <span className="without_mp_dark"><Link to="/new-id"> En demander un ;)</Link></span>
            </p>
            </div>
        </div>
    </div>
    )}
    {connected && (
        <main className="welcome_container" ref={div => (welcome_site = div)}>
            <Navbar active="accueil"/>
            <ControlledCarousel />
            <Selection />
            <Formevent />
            <ServiceList />
            <StaffList />
            <Footer />
        </main>
        )}
    </div>);
}

export default Home;
