import { Component } from 'react';
import Navbar from '../Navbar';
import Formevent from '../event/Formevent';
import ServiceList from '../services/ServiceList';
import StaffList from '../staff/StaffList';
import ControlledCarousel from '../carousel/ControlledCarousel';

export default class Home extends Component {
    render(){
        return (
            <main className="container">
              <Navbar />
              <ControlledCarousel />
              <Formevent />
              <ServiceList />
              <StaffList />
            </main>
        );
    }
}