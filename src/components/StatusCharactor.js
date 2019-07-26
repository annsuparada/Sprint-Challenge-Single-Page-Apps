import React from 'react'

export default function StatusCharactor (props) {
  const { status } = props
  return (
    <div>
      <p>{status}</p>
    </div>
  )
}