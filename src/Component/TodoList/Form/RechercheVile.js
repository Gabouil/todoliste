import React from 'react'

function RechercheVile(cityName, setCityName, fetchWeather) {
  return (
      <form>
        <input 
          value={cityName}
          type="test"
          placeholder="Titre"
          onChange={e => (setCityName(e.target.value))}
          className="form-control mb-2"
        />
        <button id="addToTodo" className="btn btn-primary" onClick={() => (console.log("hello"))}>Ajouter</button>
      </form>
  )
}

export default RechercheVile