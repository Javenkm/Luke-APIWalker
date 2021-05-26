import React from 'react'

const Film = props => {
    const { title, director, opening_crawl } = props.film;
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                <li><b>Director:</b> {director}</li>
                <li>
                    <p>{opening_crawl}</p>
                </li>
            </ul>
        </div>
    )
}

export default Film
