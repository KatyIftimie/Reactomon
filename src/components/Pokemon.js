import React, { useState } from 'react'
import PokemonDetails from './PokemonDetails';
import Axios from 'axios';

export default function Pokemon(props) {
    const { name, url } = props;

    const [showDetails, setShowDetails] = useState(false);
    const [data, setData] = useState([])

    const show = (e) => {
        console.log(e)
        setShowDetails(!showDetails);
    }

    // useEffect(() => {
    //     const getPokemonData = Axios.get(url);
    //     setData(getPokemonData)
    // }, [])

    return (
        <div>
            <h1 onClick={(e) => show(e)}>{name}</h1>
            {showDetails ? <PokemonDetails url={url} /> : null}
        </div>

    )
}
