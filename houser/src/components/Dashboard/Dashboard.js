import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import House from '../House/House';

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            houses: [
                {
                    name: '',
                    address: '',
                    city: '',
                    state: '',
                    zipcode: ''
                }
            ]
        }
    }

    componentDidMount(){
        console.log('hey')
         axios.get('/api/houses')
             .then(resp => {
                 console.log(resp)
                 this.setState({
                     houses: resp.data
                 })
             })
    }


    render(){
        const { houses } = this.state
        let mappedHouses = houses.map((itemFromHouses, i) => {
            return <House key={i} item={itemFromHouses}/>
        })
        return (
            <div>Dashboard
               <Link to='/wizard'><button className='btn'>Add New Property</button></Link>
               {mappedHouses}
            </div>
        
        )
    }
}

export default Dashboard;