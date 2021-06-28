import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Characters from './components/Characters'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characterList, setCharacterList] = useState([])

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(({data}) => setCharacterList(data))
      .catch(err => console.log(err))
      return () => console.log('Cleaning up')
  }, [])

  



  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characterList.map(person => {
                return <Character key={person.url} birthYear={person.birth_year} name={person.name} films={person.films} homeworld={person.homeworld} />
            })}
    </div>
  );
}

export default App;
