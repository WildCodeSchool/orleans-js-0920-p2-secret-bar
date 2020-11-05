import { Component } from 'react';
import Navbar from '../Navbar';
import Formevent from '../event/Formevent';
import ServiceList from '../services/ServiceList';
import StaffList from '../staff/StaffList';
// import ControlledCarousel from '../carousel/ControlledCarousel';
import Footer from '../footer/Footer';
import FakeCarrousel from '../fake-carrousel/FakeCarrousel';

export default class Home extends Component {
    render(){
        return (
            <main>
              <Navbar />
              {/* <ControlledCarousel /> */}
              <FakeCarrousel />
              <Formevent />
              <ServiceList />
              <StaffList />
              <Footer />
            </main>
        );
    }
}