import React, { Component, useState } from "react"
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID"


import Card from './Card'


export default function TodoList() {
    const [inputTitle, setinputTitle] = useState('')
    const [inputeDesc, setinputDesc] = useState('')
    const [items, setitems] = useState([])

    const addTodo = (e) => {
        e.preventDefault()
        let id = generateUniqueID()
        setitems([...items, {title:inputTitle,desc:inputeDesc, ID:id, status:false}])
        setinputDesc('')
        setinputTitle('')
    };


    return(
        <div className="app-container d-flex align-items-center justify-content-around flex-column text-center">
            <h1>Nouvelle tache</h1>
            <form className="d-flex align-items-center mb-5 flex-column w-50">
                <input 
                    value={inputTitle}
                    type="test"
                    placeholder="Titre"
                    onChange={e => (setinputTitle(e.target.value))}
                    className="form-control mb-2"
                />
                <input 
                    value={inputeDesc}
                    type="test"
                    placeholder="Tache"
                    onChange={e => (setinputDesc(e.target.value))}
                    className="form-control mb-2"
                />
                <button id="addToTodo" className="btn btn-primary" onClick={addTodo}>Ajouter</button>
            </form>
            <h1>Preview</h1>
            <div className="list-group w-50 btn border border-secondary mb-5">
                <div className="d-flex flex-column align-items-center justify-content-between mb-4" key='preview'>
                    <div className="d-flex flex-column align-items-center justify-content-between mb-2">
                        <h1 className="w-100 h-25">{inputTitle}</h1>
                        <p className="w-100 h-75">{inputeDesc}</p>
                    </div>
                </div>
            </div>
            <div className="list-group w-50">
            <h1>Tache à faire</h1>
            <div>{items.filter(e => e.status==false).map(item =>
                <Card key={item.ID} title={item.title} desc={item.desc} ID={item.ID} status={item.status} items={items} setitems={setitems}/>
            )}</div>
            <h1>Tache faite</h1>
            <div>{items.filter(e => e.status==true).map(item =>
                <Card title={item.title} desc={item.desc} ID={item.ID} status={item.status} items={items} setitems={setitems}/>
            )}</div>

            </div>

        </div>
    )
}