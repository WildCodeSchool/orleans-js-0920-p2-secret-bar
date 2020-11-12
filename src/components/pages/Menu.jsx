import { Component } from 'react';
import Footer from '../footer/Footer';
import ControlledCarousel from '../carousel/ControlledCarousel';
import ControlledAccordions from '../menu/Accordion';


export default class Menu extends Component {
    render(){
        return (
            <main className="container">
              <ControlledCarousel />
              <ControlledAccordions />
              <Footer />
            </main>
        );
    }
}