import React from 'react';

export default function House(props) {
    return(
        <div>House
            <h3>{props.item.name}</h3>
            <br/>
            <h3>{props.item.address}</h3>
            <br/>
            <h3>{props.item.city}</h3>
            <br/>
            <h3>{props.item.state}</h3>
            <br/>
            <h3>{props.item.zipcode}</h3>
            <br/>
            <button>Delete</button>
        </div>
            
    )
}