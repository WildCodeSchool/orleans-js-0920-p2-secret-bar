import { Component } from 'react';
import Navbar from '../Navbar';
import Formevent from '../event/Formevent';
import ServiceList from '../services/ServiceList';
import Selection from '../selection/Selection';
import StaffList from '../staff/StaffList';
import Footer from '../footer/Footer';

export default class Home extends Component {
    render(){
        return (
            <main className="container">
              <Navbar />
              <Formevent />
              <ServiceList />
              <StaffList />
              <Footer />
            </main>
        );
    }
}