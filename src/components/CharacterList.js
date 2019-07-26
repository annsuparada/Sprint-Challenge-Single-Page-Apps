import React, { useEffect, useState } from 'react';
import axios from "axios";
import CharactorCard from "./CharacterCard"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [name, setName] = useState('')
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character`)
    .then(response => {
      const character = response.data.results
      console.log('charactor', character)
      setCharacters(character)
      setName(response.data.results[0].name)
      console.log("setName", setName)
    })
  }, [])

  return (
    <section className='character-list grid-view'>
      {characters.map((item, id ) => {
        return(
          <CharactorCard item={item.name} key={id}/>
        )
      })}
      
    </section>)

}
