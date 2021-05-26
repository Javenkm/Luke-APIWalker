import React from 'react'

const Starship = props => {
    const { name, manufacturer, cost_in_credits, max_atmosphering_speed, crew, passengers } = props.starships;
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                <li><b>Manufacturer:</b> {manufacturer}</li>
                <li><b>Cost In Credits:</b> {cost_in_credits}</li>
                <li><b>Max Atmosphering Speed:</b> {max_atmosphering_speed}</li>
                <li><b>Crew:</b> {crew}</li>
                <li><b>Passengers:</b> {passengers}</li>
            </ul>
        </div>
    )
}

export default Starship
