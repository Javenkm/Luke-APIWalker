import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import WrongDroids from '../components/WrongDroids';
import Person from '../components/Person';
import Planet from '../components/Planet';
import Film from '../components/Film';
import Species from '../components/Species';
import Starship from './components/Starship';
import Vehicle from './components/Vehicle';

const Display = props => {
    const { category, id } = props;

    const [error, setError] = useState(false);

    const [data, setData] = useState({});

    const [homeWorldId, setHomeWorldId] = useState(null);

    useEffect(() => {
        axios.get(`http://swapi.dev/api/${category}/${id}`)
            .then(response => {
                const { name, height, mass, hair_color, skin_color } = response.data;
                setData({name, height, mass, hair_color, skin_color, homeworld:""});
                setError(false);
                if(category.toLowerCase() === "people") {
                    setHomeWorldId(response.data.homeworld.slice(29).slice(0, -1));
                }
            })
            .catch(err => setError(true));
    }, [category, id])

    return (
        <div>
            {
                error ?
                <WrongDroids />
                : category.toLowerCase() === "people" ?
                <Person person={data} homeWorldId={homeWorldId}/>
                : category.toLowerCase() === "planets" ?
                <Planet planet={data} />
                : category.toLowerCase() === "films" ?
                <Film film={data} />
                : category.toLowerCase() === "species" ?
                <Species species={data} />
                : category.toLowerCase() === "starship" ?
                <Starship starship={data} />
                : category.toLowerCase() === "vehicles" ?
                <Vehicle vehicle={data} />
                : ''
            }
        </div>
    )
}

export default Display
