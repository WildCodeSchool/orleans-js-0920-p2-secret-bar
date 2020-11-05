import { Component } from 'react';
import Navbar from '../Navbar';
import Formevent from '../event/Formevent';
import ServiceList from '../services/ServiceList';
import Selection from '../selection/Selection';

export default class Home extends Component {
    render(){
        return (
            <main className="container">
                <Navbar />
                <Selection />
                <Formevent />
                <ServiceList />
            </main>
        );
    }
}