import React, { useState } from 'react';
import styled from 'styled-components'
import axios from 'axios'

function yearSetter(value, index) {
    const arr = [value]
    const splitPoint = arr[0].indexOf('B')
    return value.substring(0, splitPoint) + "_" + value.substring(splitPoint);
}



const Character = (props) => {
    const { birthYear, name, films, homeworld } = props;
    const [planet, setPlanet] = useState([])
    console.log(props)


    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

    // Fetch characters from the API in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.


    axios.get(homeworld)
        .then(({ data }) => setPlanet(data.name))
        .catch(err => console.log(err))


    return (
        <div>
            <Container>
                <Header><Anchor target="_blank" href={`https://starwars.fandom.com/wiki/${name.split('_')}`} >{name}</Anchor></Header>
                <p>Home World: <Anchor target="_blank" href={`https://starwars.fandom.com/wiki/${planet}`} >{planet}</Anchor></p>
                <p>Birth Year: <Anchor target="_blank" href={`https://starwars.fandom.com/wiki/${yearSetter(birthYear, 2)}`} >{birthYear}</Anchor></p>
                <ul>
                    <Header>Films:</Header>
                    {films.map((value, index) => {
                        return <LiContainer><li key={index}>{value}</li></LiContainer>
                    })}
                </ul>
            </Container>
        </div>
    );
}



const Container = styled.div`
  font-family: 'Press Start 2P', cursive;
  color: white;
  border: 4px solid red;
  border-radius:10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15px auto;
  width:50%;
`
const Header = styled.h3`
color: red;
`
const LiContainer = styled.li`
margin: 1rem 0;`

const Anchor = styled.a`
    color: red;
`


export default Character;
