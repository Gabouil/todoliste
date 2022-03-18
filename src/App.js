import './App.css';
import React, { Component, useEffect, useState } from "react"

import Gradient from './view/Gradient';
import TodoList from './view/TodoList'

function App() {
  const [nav, setnav] = useState(true)

  return (
    <>
      <nav>
        <button className='btn' onClick={() => setnav(true)}>Todo List</button>
        <button className='btn' onClick={() => setnav(false)}>Gradient</button>
      </nav>
      {nav ? <TodoList /> : <Gradient />}
    </>
  );
}

export default App;
