import React from 'react'

export default function Product(props) {
  return (
    <div>
      <h4>Hey I am {props.fullData}</h4>
      <h4>Hey I am {props.name}</h4>
      <h4>Hey I am {props.age}</h4>
      <h4>Hey I am {props.position}</h4>
      <h4>Hey I am {props.salary}</h4>
    </div>
  )
}
