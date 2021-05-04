import React from 'react'

const PhotoCard = (props) => {
  return (
    <section style={{margin: "5px"}}>
      <img className="album-img" src={props.item.image} alt={props.description}/>
      <p>{props.item.note}</p>
    </section>
  )
}

export default PhotoCard
