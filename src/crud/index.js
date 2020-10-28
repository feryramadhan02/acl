import React, { Component } from 'react';
import Formulir from './Formulir';
import NavbarComp from '../crud/NavbarComp';
import Table from './Tables';
import event from "event-module";


export default class crud extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             project : [],
             nama : "",
             deskripsi : "",
             harga : 0,
             id : ""

        }
    }
    
    handleChange = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = () => {
        // mengantisipasi agar tidak reload browser
        
        // eslint-disable-next-line no-restricted-globals
        // event.preventDefault();
        event.preventDefault();
        console.log("Data : ", this.state);
    }   

    render() {
        return (
            <div>
                <NavbarComp></NavbarComp>
                <div className="container mt-5">
                    <Table />
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}