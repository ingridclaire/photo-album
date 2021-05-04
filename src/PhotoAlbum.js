import React, { useState, useEffect } from 'react'
import PhotoCard from './PhotoCard';
import data from './data.js';
import axios from 'axios';

const PhotoAlbum = () => {
  const [photos, setPhotos] = useState([]);
  const [bg, setBg] = useState('light')
  useEffect(() => {
    //send an axios request to get all photo data in database
      //inside .then function
      setPhotos(data);
  }, [])

  const toggleMode = (e) => {
    e.preventDefault();
    if (bg === 'light') {
      setBg('dark');
    } else {
      setBg('light');
    }
  }

  return (
    <div className={`photo-album ${bg}`} style={{}}>
      <button onClick={toggleMode}>Toggle Mode</button>
      {photos.map(photo => {
        return <PhotoCard item={photo} />
      })}
    </div>
  )
}

export default PhotoAlbum

// props = {
//   img: "/images/george.jpeg",
//   description: "a fat, lazy cat"
// }

// `Hi my name is ${getName('Ingrid')}`
