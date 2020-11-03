import { Component } from 'react';
import Navbar from '../Navbar';
import Formevent from '../event/Formevent';
import ServiceList from '../services/ServiceList';
import StaffList from '../staff/StaffList';

export default class Home extends Component {
    render(){
        return (
            <main className="container">
              <Navbar />
              <Formevent />
              <ServiceList />
              <StaffList />
            </main>
        );
    }
}