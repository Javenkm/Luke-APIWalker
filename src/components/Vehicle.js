import React from 'react'

const Vehicle = props => {
    const { name, manufacturer, model, passengers, cargo_capacity, cost_in_credits, crew } = props.vehicles;
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                <li><b>Manufacturer:</b> {manufacturer}</li>
                <li><b>Model:</b> {model}</li>
                <li><b>Passengers:</b> {passengers}</li>
                <li><b>Cargo Capacity:</b> {cargo_capacity}</li>
                <li><b>Cost In Credits:</b> {cost_in_credits}</li>
                <li><b>Crew:</b> {crew}</li>
            </ul>
        </div>
    )
}

export default Vehicle
