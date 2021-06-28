import React from 'react';
import Character from './Character'
import styled from 'styled-components'




const Characters = (props) => {
    const { characters } = props;

    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

    // Fetch characters from the API in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.




    return (
        <div>
            <Header> <h1>STAR WARS</h1></Header>
            {characters.map(person => {
                return <Character key={person.url} birthYear={person.birth_year} name={person.name} films={person.films} homeworld={person.homeworld} />
            })}
        </div>
    );
}

const Header = styled.h1`
color: #FFE81F;
font-size: 2rem;
`

export default Characters;
