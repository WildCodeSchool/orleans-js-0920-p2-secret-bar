import { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
import ControlledAccordions from '../menu/Accordion';
import Header from '../header/Header';

export default class Menu extends Component {
    render(){
        return (
            <main className="container">
              <Navbar active="carte" />
              <Header 
                urlImg="https://zupimages.net/up/20/48/da0a.jpg" 
                urlImgTablet="https://zupimages.net/up/20/48/3mkx.jpg" 
                urlImgMobile="https://zupimages.net/up/20/48/bqmg.jpg" 
              />
              <ControlledAccordions />
              <Footer />
            </main>
        );
    }
}