import React, { Component, useState } from "react"
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID"


function TodoList() {
    const [inputTitel, setinputTitel] = useState('')
    const [inputeDesc, setinputDesc] = useState('')
    const [items, setitems] = useState([])

    const addTodo = (e) => {
        e.preventDefault()
        let id = generateUniqueID()
        setitems([...items, [inputTitel,inputeDesc, id]])
        setinputDesc('')
        setinputTitel('')
    };
    const deleteTodo = (item) => {
        let newlist = items.filter(e => e[2] != item[2])
        setitems(newlist)
    }


    return(
        <div class="app-container d-flex align-items-center justify-content-around flex-column">
            <h1>Ma todo list</h1>
            <form class="d-flex align-items-center mb-5 flex-column w-50">
                <input 
                    value={inputTitel}
                    type="test"
                    placeholder="Titre"
                    onChange={e => (setinputTitel(e.target.value))}
                    class="form-control mb-2"
                />
                <input 
                    value={inputeDesc}
                    type="test"
                    placeholder="Tache"
                    onChange={e => (setinputDesc(e.target.value))}
                    class="form-control mb-2"
                />
                <button id="addToTodo" class="btn btn-primary" onClick={addTodo}>Ajouter</button>
            </form>
            <div class="list-group w-50 btn border border-secondary mb-5">
                <div class="d-flex flex-column align-items-center justify-content-between mb-4" key='preview'>
                    <div class="d-flex flex-column align-items-center justify-content-between mb-2">
                        <h1 class="w-100 h-25">{inputTitel}</h1>
                        <p class="w-100 h-75">{inputeDesc}</p>
                    </div>
                </div>
            </div>
            <div className="list-group w-50">
                <div>{items.map(item =>
                    <div class="d-flex flex-column align-items-center justify-content-between mb-4" key={item[2]}>
                        <input type="checkbox" class="btn-check" id={item[2]} autocomplete="off" />
                        <label class="btn btn-outline-success w-100 mb-2" for={item[2]}>
                            <div class="d-flex flex-column align-items-center justify-content-between mb-2">
                                <h1 class="w-100 h-25">{item[0]}</h1>
                                <p class="w-100 h-75">{item[1]}</p>
                            </div>
                        </label>
                        <button class="btn btn-danger ml-2" onClick={() => deleteTodo(item)}>Supprimer</button>
                    </div>
                )}</div>
            </div>
        </div>
    )
}


export default TodoList;