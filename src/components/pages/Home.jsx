import { Component,useEffect,useState } from 'react';
import Formevent from '../event/Formevent';
import ServiceList from '../services/ServiceList';
import Selection from '../selection/Selection';
import StaffList from '../staff/StaffList';
import Footer from '../footer/Footer';
import ControlledCarousel from '../carousel/ControlledCarousel';
import ControlledAccordions from '../menu/Accordion';
import LogoMini from "../image/logo_mini";
import { Switch, Route, Link } from 'react-router-dom';


import { TimelineLite } from "gsap";
import anime from "animejs";

import Connexion from "../../identifiants.json";

import "./Home.css";


const Home =  props => {

    let panoDroit = null;
    let panoGauche = null;
    let transition = null;
    let btnEnter = null;
    let accueil = null;
    let accueil_site = null;
    let formAcc = null;
    let phrase = null;
    let logoMini = null;
    let animation = null;
    let animAccueil = new TimelineLite({
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
          animAccueil
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
                tl.to(accueil_site, 0.7, {
                    opacity: 1
                }).play();
            }
        }, [connected]);


    const handleChangeId = event => {
        setIdentifiant(event.target.value);
      };

    const valideForm = () => {
        
        Connexion.forEach(element => {
            if(element.id === identifiant){
                setId(identifiant);
                setNom(element.name);
                setAlcools(element.alcools);
                console.log("id :" + id);
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
            .to(panoDroit, 0.7, { height: 0, ease: "power2.inOut" }, "pano+=0.5")
            .to(panoGauche, 0.7, { yPercent: 100, ease: "power2.inOut" }, "pano+=0.5")
            
            .to([transition, accueil], 0.1, {
                display: "none",
                onComplete: () => {
                setConnected(true);
                }
            })
            .play();
            }
        });
        console.log("id :" +id);
        if(id != ""){
            setErrorForm("Mauvais identifiant");
        }
    };        
    


return( 
    <div className="Home">
    {!connected && (
    <div>
        <div className="transition" ref={div => (transition = div)}>
            <div className="panoGauche" ref={div => (panoGauche = div)}></div>
            <div className="panoDroit" ref={div => (panoDroit = div)}></div>
        </div>
        <div className="accueil" ref={div => (accueil = div)}>
            <div ref={div => (logoMini = div)}>
            <LogoMini />
            </div>

            <form className="form_accueil" ref={div => (formAcc = div)}>
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
            <div className="sans_mp" ref={div => (phrase = div)}>
            <p>
                Vous n'avez pas encore d'identifiant, dommage !{"  "}

                <span className="sans_mp_dark"><Link to="/inscription"> En demander un ;)</Link></span>
            </p>
            </div>
        </div>
    </div>
    )}
    {connected && (
        <main className="accueil_container" ref={div => (accueil_site = div)}>
            <ControlledCarousel />
            <ControlledAccordions />
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