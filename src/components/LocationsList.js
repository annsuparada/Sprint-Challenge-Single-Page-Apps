import React, { useEffect, useState } from 'react';
import LocationCard from "./LocationCard"
import ResidentsLocation from "./ResidentsLocation"
import TypeLocation from "./TypeLocation"
import DimensionLocation from "./DimensionLocation"
import axios from 'axios';

import { Card, Icon, Image } from 'semantic-ui-react'

export default function LocationsList() {
    const [location, setLocation] = useState([])
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [dimension, setDimension] = useState('')
    const [resident, setResident] = useState('')

    useEffect(() => {
        axios
        .get(`https://rickandmortyapi.com/api/location/`)
        .then(response => {
            const location = response.data.results
            console.log('location', location)
            setLocation(location)
            setName(response.data.results[0].name)
            setType(response.data.results[0].type)
            setDimension(response.data.results[0].dimension)
            setResident(response.data.results[0].residents)
            
        })
    },[])

    return(
        <Card.Group>
            {location.map((item, id) => {
                return(
                    <Card key={Math.random()}>
                        <Card.Content>
                            <Card.Header>
                                <LocationCard name={item.name} key={Math.random()} />
                            </Card.Header>
                            <Card.Description>
                                <TypeLocation type={item.type} key={Math.random()} />
                                <DimensionLocation dimension={item.dimension} key={Math.random()}/>
                            </Card.Description>
                                <ResidentsLocation resident={item.residents.length} key={Math.random()}/>
                        </Card.Content>
                    </Card>
                )
            })}
        </Card.Group>
    )
}
