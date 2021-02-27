import React from 'react';

const Country = (props) => {
    const {name, flag, population, capital} = props.country;
    const handleAdded = props.handleAdded;
    const divStyle = {
        border: '1px solid black',
        margin: '10px',
        padding: '10px'
    };
    const flagStyle = {
        height: '150px'
    }
    return (
        <div style={divStyle}>
            <img style={flagStyle} src={flag} alt=""/>
            <h2>This is {name}</h2>
            <p><small>Capital:{capital}</small></p>
            <p>Population: {population}</p>
            <button onClick={() => handleAdded(props.country)}>Added Country</button>
        
        </div>
    );
};

export default Country;