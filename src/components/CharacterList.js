import React, { useEffect, useState } from 'react';
import axios from "axios";
import CharactorCard from "./CharacterCard"
import LocationCharactor from "./LocationCharactor"
import OriginCharactor from "./OriginCharactor"
import SpeciesCharactor from "./SpeciesCharactor"
import StatusCharactor from "./StatusCharactor"


import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [origin, setOrigin] = useState('')
  const [species, setSpies] = useState('')
  const [status, setStatus] = useState('')
  const [img, setImg] =useState('')


  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      const character = response.data.results
      // console.log('charactor', character)
      setCharacters(character)
      setName(response.data.results[0].name)
      setLocation(response.data.results[0].location.name)
      setOrigin(response.data.results[0].origin.name)
      setSpies(response.data.results[0].species)
      setStatus(response.data.results[0].status)
      setImg(response.data.results[0].image)
      
    })
  }, [])

  return (
    <section className='character-list grid-view'>
      {characters.map((item, id ) => {
        return(
          <Card>
            <Card.Content>
            <Image src={item.image} wrapped ui={true} />
              <Card.Header>
                <CharactorCard name={item.name} key={Math.random()}/>
              </Card.Header>
              <Card.Meta>
                <SpeciesCharactor species={item.species} key={Math.random()}/>
                <StatusCharactor status={item.status} key={Math.random()}/>
              </Card.Meta>
              <Card.Description>
                <LocationCharactor location={item.location.name} key={Math.random()} />
              </Card.Description>
              <Card.Description>
                <OriginCharactor origin={item.origin.name} key={Math.random()}/>
              </Card.Description>
            </Card.Content>
          </Card>
        )
      })}
      
    </section>)

}
