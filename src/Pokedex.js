import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';


const Pokedex = ({pokemon}) => {
    return (
        <div className="Pokedex">
            <h2 className="Pokedex-title">Pokedex</h2>
            <div className="Pokedex-cards">
                {pokemon.map(p => (
                    <Pokecard 
                    key={p.id} 
                    id={p.id} 
                    name={p.name} 
                    type={p.type} 
                    base_experience={p.base_experience} />
                ))}
            </div>
        </div>
    )
};

export default Pokedex;
