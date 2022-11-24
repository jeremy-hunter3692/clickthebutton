import React, { useState } from 'react'

export default function Popup() {
  const [index, setIndex] = useState(0.33)
  function popup(e) {
    // e.preventdefault()
    setIndex(Math.floor(Math.random() * 100))
  }

  return (
    <>
      <div className="buttondiv">
        <button onMouseOver={popup}>Click Me</button>
        <p>{index}</p>
      </div>
    </>
  )
}
