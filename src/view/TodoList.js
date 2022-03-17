import React, { Component, useState } from "react"
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID"


import Card from '../Component/Card'
import NewCard from '../Component/Form/NewCard'
import PreviewNewCard from "../Component/Preview/PreviewNewCard"


export default function TodoList() {
    const [inputTitle, setinputTitle] = useState('')
    const [inputeDesc, setinputDesc] = useState('')
    const [items, setitems] = useState([])


    // ajout d'une nouvelle tache
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
            <NewCard inputTitle={inputTitle} inputeDesc={inputeDesc} setinputDesc={setinputDesc} setinputTitle={setinputTitle} addTodo={addTodo}/>
            <h1>Preview</h1>
            <PreviewNewCard inputTitle={inputTitle} inputeDesc={inputeDesc} />
            <div className="w-75 d-flex justify-content-between gap-2">
                <div className="list-group w-50">
                    <h1>Tache à faire</h1>
                    <div>{items.filter(e => e.status==false).map(item =>
                        <Card key={item.ID} title={item.title} desc={item.desc} ID={item.ID} status={item.status} items={items} setitems={setitems}/>
                    )}</div>
                </div>
                <div className="list-group w-50">
                    <h1>Tache faite</h1>
                    <div>{items.filter(e => e.status==true).map(item =>
                        <Card key={item.ID} title={item.title} desc={item.desc} ID={item.ID} status={item.status} items={items} setitems={setitems}/>
                    )}</div>
                </div>
            </div>
        </div>
    )
}