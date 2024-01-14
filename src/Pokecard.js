import React from 'react';

const Pokecard = ({id, name, type, base_experience}) => {
    const img_src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div>
            <h3>{name}</h3>
            <img src = {img_src} />
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    );
};

export default Pokecard;
