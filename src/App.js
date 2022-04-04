import './App.css';
import React, { Component, useEffect, useState } from "react"

import Gradient from './view/Gradient';
import TodoList from './view/TodoList'
import Meteo from './view/Meteo'

function App() {
  const [navresult, setnavresult] = useState(0)
  const [navList, setnavList] = useState([<TodoList />, <Gradient />, <Meteo />])

  return (
    <>
      <nav>
        <button className='btn' onClick={() => setnavresult(0)}>Todo List</button>
        <button className='btn' onClick={() => setnavresult(1)}>Gradient</button>
        <button className='btn' onClick={() => setnavresult(2)}>Meteo</button>
      </nav>
      {navList[navresult]}
    </>
  );
}

export default App;
