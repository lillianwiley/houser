import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
   constructor(){
       super()

       this.state = {
           name: '',
           address: '',
           city: '',
           state: '',
           zipcode: ''
       }

       this.handleChangeName=this.handleChangeName.bind(this)
       this.handleChangeAddress=this.handleChangeAddress.bind(this)
       this.handleChangeCity=this.handleChangeCity.bind(this)
       this.handleChangeState=this.handleChangeState.bind(this)
       this.handleChangeZip=this.handleChangeZip.bind(this)
   }

   handleChangeName(value){
       //console.log(value)
       this.setState({name: value})
   }

   handleChangeAddress(value){
       //console.log(value)
       this.setState({address: value})
   }

   handleChangeCity(value){
       //console.log(value)
       this.setState({city: value})
   }

   handleChangeState(value){
       //console.log(value)
       this.setState({state: value})
   }

   handleChangeZip(value){
        console.log(value)
        this.setState({state: value})
   }

    render(){
        return (
            <div>Wizard
            <h4>Property Name</h4>
                <input onChange={e => this.handleChangeName(e.target.value)}value={this.state.input} name={this.state.name}type="text" id=""/>
            
            <h4>Address</h4>
                <input onChange={e => this.handleChangeAddress(e.target.value)}value={this.state.input} name={this.state.address}type="text" id=""/>
            
            <h4>City</h4>
                <input onChange={e => this.handleChangeCity(e.target.value)}value={this.state.input}  name={this.state.city} type="text" id=""/>
            
            <h4>State</h4>
                <input onChange={e => this.handleChangeState(e.target.value)} value={this.state.input}  name={this.state.state} type="text" id=""/>
            
            <h4>zipcode</h4>
                <input onChange={e => this.handleChangeZip(e.target.value)}value={this.state.input} name={this.state.zipcode}type="text" id=""/>
                
                <button>Add to Inventory</button>
                
                <Link to='/'><button>Cancel</button></Link>
            </div>
        )
    }
}

export default Wizard;