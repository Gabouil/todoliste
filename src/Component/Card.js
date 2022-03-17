import React, { Component, useState } from "react"

export default function Card({title, desc, ID, status, items, setitems}) {
    const [modifCard, setmodifCard] = useState(false)


    const deleteTodo = () => {
        let newlist = items.filter(e => e.ID != ID)
        setitems(newlist)
    }
    const handleStatus = () => {
        switch(status) {
            case true:
                status =false
                break
            case false:
                status = true
                break
        }
        let newlist = items.map(e => {
            if(e.ID == ID) {
                return {...e, status: status}
            }
            return e;
        })
        setitems(newlist)
    }
    const changeCard = () => {
        switch(modifCard) {
            case true:
                setmodifCard(false)
                break
            case false:
                setmodifCard(true)
                break
        }
    }
    
    const changeTodo = (e) => {
        e.preventDefault()
        let newlist = items.map(e => {
            if(e.ID == ID) {
                return {...e, desc: desc, title: title}
            }
            return e;
        })
        setitems(newlist)
        setmodifCard(false)

    };

    const handleChangeCard = () => {
        if(modifCard == true) {
            return(
                <div className="d-flex align-items-center mb-5 flex-column w-50">
                    <h1>Modifier la tache</h1>
                    <form className="d-flex align-items-center  flex-column">
                        <input 
                            type="test"
                            placeholder="modifier le titre"
                            onChange={e => (title = e.target.value)}
                            className="form-control mb-2"
                        />
                        <input 
                            type="test"
                            placeholder="modifier la tache"
                            onChange={(e => (desc = e.target.value))}
                            className="form-control mb-2"
                        />
                        <button id="changeTodo" className="btn btn-primary" onClick={changeTodo}>Changer</button>
                    </form>
                </div>
            )
        }
    }
    
    return (
        <div className="d-flex flex-column align-items-center justify-content-between mb-4" key={ID}>
            <div className={`${status ? "btn-success" : "btn-warning"} btn w-100 mb-2 d-flex align-items-center justify-content-center position-relative`} htmlFor={ID}>
                <div className="d-flex flex-column align-items-center justify-content-between mb-3">
                    <h1 className="w-100 h-25">{title}</h1>
                    <p className="w-100 h-75">{desc}</p>
                </div>
                <div className="w-25 position-absolute end-0">
                    <button className="btn w-25" onClick={() => changeCard()}>
                        <img className="w-100" src="https://upload.wikimedia.org/wikipedia/commons/5/57/Noun_project_-_crayon.svg"/>
                    </button>
                </div>
            </div>
            {handleChangeCard()}
            <button className={`${status ? "btn-warning" : "btn-success"} btn ml-2 w-25 mb-1`} onClick={() => handleStatus()}>{status ? "À faire":"Fait"} </button>
            <button className="btn btn-danger ml-2 w-25 mb-1" onClick={() => deleteTodo()}>Supprimer</button>
        </div>
    )
}