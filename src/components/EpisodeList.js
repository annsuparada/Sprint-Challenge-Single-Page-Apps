import React, { useEffect, useState } from 'react';
import EpisodeCard from "./EpisodeCard"

import axios from 'axios';

import { Card, Icon, Image } from 'semantic-ui-react'

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([])
    const [name, setName] = useState('')
    

    useEffect(() => {
        axios
        .get(`https://rickandmortyapi.com/api/episode/`)
        .then(response => {
            const ep = response.data.results
            console.log('EP', ep)
            setEpisodes(ep)
            setName(response.data.results[0].name)
            
            
        })
    },[])

    return(
        <Card.Group>
            {episodes.map((item, id) => {
                return(
                    <Card key={Math.random()}>
                        <Card.Content>
                            <Card.Header>
                                <EpisodeCard name={item.name} key={Math.random()}/>
                            </Card.Header>
                        </Card.Content>
                    </Card>
                )
            })}
        
        </Card.Group>
    )
}
