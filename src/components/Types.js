import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Types() {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("Requesting http");
        async function fetchData() {
            const res = await axios.get('https://pokeapi.co/api/v2/type')

            console.log(res.data.results)
            setData(res.data.results)
        }
        fetchData();
    }, []);


    return (
        <div>
            {
                data.map((type) => (
                    // { type }
                    <p>{type.name}</p>
                ))
            }</div>
    )

}


