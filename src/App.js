import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Characters from './components/Characters';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(({ data }) => setCharacters(data))
      .catch(err => console.log(err))
    return () => console.log('Cleaning up')
  }, [])

  return (
    <div className="App">
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <Characters characters={characters} />

    </div >
  );
}

export default App;