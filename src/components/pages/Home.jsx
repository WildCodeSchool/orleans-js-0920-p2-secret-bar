import { Component } from 'react';
import Navbar from '../Navbar';
import Formevent from '../event/Formevent';
import ServiceList from '../services/ServiceList';
import Selection from '../selection/Selection';
import StaffList from '../staff/StaffList';
import Footer from '../footer/Footer';
import ControlledCarousel from '../carousel/ControlledCarousel';
import ControlledAccordions from '../menu/Accordion';
import Portefolio from '../livreDor/Portefolio';


export default class Home extends Component {
    render(){
        return (
            <main className="container">
              <Navbar active="accueil" />
              <ControlledCarousel />
              <ControlledAccordions />
              <Selection />
              <Formevent />
              <ServiceList />
              <StaffList />
              <Footer />
              <Portefolio />
            </main>
        );
    }
}