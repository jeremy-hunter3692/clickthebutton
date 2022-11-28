import React, { useState } from 'react'

export default function Popup() {
  const [index, setIndex] = useState(0.33)
  const [pop, setPop] = useState(false)
  const image = 'image.jpeg'
  let size = Math.floor(Math.random() * 1000)
  // const popUpStyle = { color: 'red', width: '200px', margin: '5px' }
  function popup(e) {
    // e.preventdefault()
    setPop(true)
    setIndex(Math.floor(Math.random() * 100))
  }

  return (
    <>
      {pop ? (
        <div className="popUp">
          <img src={image} alt="popup ad" style={{ width: size }}></img>
          <button
            onClick={() => {
              setPop(false)
            }}
          >
            x
          </button>
        </div>
      ) : (
        <div className="buttondiv">
          <button onMouseOver={popup}>Click Me</button>
        </div>
      )}
    </>
  )
}
