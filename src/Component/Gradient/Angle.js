import React, { useState } from "react"

export default function Angle({deg,setdeg}) {

  const changeAngle = (e) => {
    deg = e.target.value
    setdeg(deg)
  }

  return (
    <div className="w-100 d-flex align-items-center justify-content-center gap-3 mb-3  flex-column">
      <label htmlFor="head">Angle du gradient</label>
      <input 
                type="range" min="0" max="360"
                value={deg}
                onChange={e => (changeAngle(e))}
                className="form-control w-50"
        />
    </div>  
  )
}
 
