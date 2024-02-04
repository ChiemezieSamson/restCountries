import React from 'react'

const MapComponent  = ({mapLink}) => {
  return (
    <div>
      <iframe
        title="Google Map"
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        src={mapLink}
      ></iframe>
    </div>
  )
}

export default MapComponent 
