import React, { useState } from 'react'

export default function Popup() {
  const [index, setIndex] = useState(null)
  const [pop, setPop] = useState(false)
  const image = [
    'image.jpeg',
    'macpop.png',
    'pop.jpeg',
    'pop2.png',
    'winodwpop.png',
  ]
  let size = Math.floor(Math.random() * 1000 + 300)
  // const popUpStyle = { color: 'red', width: '200px', margin: '5px' }
  function popup(e) {
    // e.preventdefault()
    setPop(true)
    setIndex(Math.floor(Math.random() * 4))
  }

  return (
    <>
      {pop ? (
        <div className="popUp">
          <img src={image[index]} alt="popup ad" style={{ width: size }}></img>
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
