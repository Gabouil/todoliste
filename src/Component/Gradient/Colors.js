import React, { useState } from "react"

export default function Colors({colorsList,colorsListComplet, setcolorsList, id}) {

  const changeColor = (e) => {
    colorsList.hexa = e.target.value
    let newlist = colorsListComplet.map(item => {
        if(item.id == id) {
            return {...item, hexa:colorsList.hexa}
        }
        return item;
    })
    setcolorsList(newlist)
  }

  return (
    <div className="d-flex flex-column justify-content-center gap-2">
      <label htmlFor="head">Breackpoint {colorsList.id}</label>
      <input className="w-100 form-control" type="color" id="head" name="head"
             value={colorsList.hexa} 
             onChange={e => (changeColor(e))}
      />
    </div>  
  )
}
 
