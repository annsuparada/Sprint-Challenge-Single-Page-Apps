import React from 'react'

export default function CharacterCard (props) {
  const { name} = props
  return (
    <div>
      {/* <image className="" src={img} alt={name}/> */}
      <h2>{name}</h2>
      {/* <p>{species}</p>
      <p>{status}</p>
      <h3>Location: {location}</h3>
      <h3>Origin: {origin}</h3> */}
      

    </div>
  )
}
