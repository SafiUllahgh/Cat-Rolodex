import React from 'react'

import './card.styles.css'

export const Card = props => (
    <div className='card-container'>
        <img src= {`https://robohash.org/${props.cat.id}?set=set4&size=300x300`} alt="cat-img" />
        <h2> {props.cat.name} </h2>
        <p> {props.cat.email}</p>
    </div>
)