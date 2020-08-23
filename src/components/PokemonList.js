import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Pokemon from './Pokemon';
import PokemonDetails from './PokemonDetails';

export default function PokemonList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=30')
            setData(res.data.results)
            // console.log(res.data.results)
        }
        fetchData()
    }, [])

    return (
        <React.Fragment>
            {data.map(({ url, name }) => (
                <Pokemon name={name} url={url} />
            ))}
        </React.Fragment >
    )
}


