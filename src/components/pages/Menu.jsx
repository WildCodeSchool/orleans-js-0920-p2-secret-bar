import { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
import ControlledCarousel from '../carousel/ControlledCarousel';
import ControlledAccordions from '../Menu/Accordion';

export default class Menu extends Component {
    render(){
        return (
            <main className="container">
              <Navbar active="carte" />
              <ControlledCarousel />
              <ControlledAccordions />
              <Footer />
            </main>
        );
    }
}