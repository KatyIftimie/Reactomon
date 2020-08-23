import React, { useState, useEffect } from 'react'

import axios from 'axios'

export default function PokemonDetails(props) {
    const api = props.url;
    const [data, setData] = useState([]);

    console.log(api)
    useEffect(() => {
        async function getPokemonDetails() {
            const details = await axios.get(api);
            console.log(details.data)
            setData(details.data)
        }
        getPokemonDetails();
    }, [api])

    console.log(data)

    return (
        < div >
            <p> ID: {data.id}</p>
            <p> NAME: {data.name}</p>
            <p> BASE EXPERIENCE: {data.base_experience}</p>
            <p> WEIGHT:  {data.weight}</p>
            <p> HEIGHT:  {data.height}</p>
        </ div>
    );


}

