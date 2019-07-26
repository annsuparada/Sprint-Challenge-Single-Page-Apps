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
  const [locatin, setLocation] = useState('')
  const [origin, setOrigin] = useState('')
  const [species, setSpies] = useState('')
  const [status, setStatus] = useState('')
  const [img, setImg] =useState('')


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
                <CharactorCard name={item.name} key={id}/>
              </Card.Header>
              <Card.Meta>
                <SpeciesCharactor species={item.species} key={id}/>
                <StatusCharactor status={item.status} key={id}/>
              </Card.Meta>
              <Card.Description>
                <LocationCharactor location={item.location.name} key={id} />
              </Card.Description>
              <Card.Description>
                <OriginCharactor origin={item.origin.name} key={id}/>
              </Card.Description>
            </Card.Content>
          </Card>
        )
      })}
      
    </section>)

}
