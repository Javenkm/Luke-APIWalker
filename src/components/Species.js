import React from 'react'

const Species = props => {
    const { name, average_height, classification, eye_colors, hair_colors } = props.species;
    return (
        <div>
            <h2>{ name }</h2>
            <ul>
                <li><b>Average Height:</b> {average_height} cm</li>
                <li><b>Classification:</b> {classification}</li>
                <li><b>Eye Colors:</b> {eye_colors}</li>
                <li><b>Hair Colors:</b> {hair_colors}</li>
            </ul>
        </div>
    )
}

export default Species
