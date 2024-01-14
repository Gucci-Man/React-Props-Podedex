import React from 'react';
import "./Pokecard.css"

const Pokecard = ({id, name, type, base_experience}) => {
    const img_src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div className="Pokecard" >
            <h3 className="Pokecard-name">{name}</h3>
            <img src = {img_src} />
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    );
};

export default Pokecard;
