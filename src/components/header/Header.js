import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1>Pokemon</h1>
            <Link to="/">Pokemons</Link> | <Link to="/types">Types</Link>
        </header>
    )
}
