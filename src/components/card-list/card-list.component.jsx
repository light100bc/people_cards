import React, { Children } from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';


export const CardList=props=>{
    //console.log(props);
    //card-list receives a list of people's name
    //while it needs to send each individual card data to card component.
    // !!! because card-list only responsible for the card-list appearance not for each individual card
    return (
    <div className='card-list'>
        {props.people.map(person=>(         
            <Card key={person.id} person={person} />  //pass each person into Card component
        ))}  
    </div>
    );
} ;