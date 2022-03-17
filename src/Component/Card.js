import React, { Component, useState } from "react"

export default function Card({title, desc, ID, status, items, setitems}) {
    const [modifCard, setmodifCard] = useState(false)
    const [modifTitle, setmodifTitle] = useState(title)
    const [modifDesc, setmodifDesc] = useState(desc)



    // supprimer la taghce
    const deleteTodo = () => {
        let newlist = items.filter(e => e.ID != ID)
        setitems(newlist)
    }

    // valider ou non la tache
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

    // modifier ou non la tache
    const changeCard = () => {
        switch(modifCard) {
            case true:
                setmodifCard(false)
                break
            case false:
                setmodifCard(true)
                break
        }

        // annulation des modification
        setmodifTitle(title)
        setmodifDesc(desc)
    }

    // envoi des modification de la tache
    const changeTodo = (e) => {
        e.preventDefault()
        title = modifTitle
        desc = modifDesc
        let newlist = items.map(e => {
            if(e.ID == ID) {
                return {...e, desc: desc, title: title}
            }
            return e;
        })
        setitems(newlist)
        setmodifCard(false)

    };


    // affichache de la tache ou du form de modification
    const handleChangeCard = () => {
        if(modifCard == true) {
            return(
                <div className="d-flex flex-column align-items-center justify-content-between mb-3">
                    <form className="d-flex align-items-center  flex-column">
                        <input 
                            value={modifTitle}
                            type="test"
                            placeholder="modifier le titre"
                            onChange={e => (setmodifTitle(e.target.value))}
                            className="form-control mb-2"
                        />
                        <input 
                            value={modifDesc}
                            type="test"
                            placeholder="modifier la tache"
                            onChange={(e => (setmodifDesc(e.target.value)))}
                            className="form-control mb-2"
                        />
                        <button id="changeTodo" className="btn btn-primary" onClick={changeTodo}>Changer</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="d-flex flex-column align-items-center justify-content-between mb-3">
                    <h1 className="w-100 h-25">{title}</h1>
                    <p className="w-100 h-75">{desc}</p>
                </div>
            )
        }
    }
    

    
    return (
        <div className="d-flex flex-column align-items-center justify-content-between mb-4" key={ID}>
            <div className={`${status ? "btn-success" : "btn-warning"} btn w-100 mb-2 d-flex align-items-center justify-content-center position-relative`} htmlFor={ID}>
                {handleChangeCard()}
                <div className="w-25 position-absolute end-0">
                    <button className="btn w-25" onClick={() => changeCard()}>
                        <img className="w-100" src="https://upload.wikimedia.org/wikipedia/commons/5/57/Noun_project_-_crayon.svg"/>
                    </button>
                </div>
            </div>
            <button className={`${status ? "btn-warning" : "btn-success"} btn ml-2 w-25 mb-1`} onClick={() => handleStatus()}>{status ? "À faire":"Fait"} </button>
            <button className="btn btn-danger ml-2 w-25 mb-1" onClick={() => deleteTodo()}>Supprimer</button>
        </div>
    )
}