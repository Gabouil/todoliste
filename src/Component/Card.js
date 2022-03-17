import React, { Component, useState } from "react"
import ContentCard from "./Content/ContentCard"
import ModifCard from "./Form/ModifCard"

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
        const newStatus = status ? false : true
        let newlist = items.map(e => {
            if(e.ID == ID) {
                return {...e, status: newStatus}
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
                <ModifCard modifTitle={modifTitle} modifDesc={modifDesc} setmodifTitle={setmodifTitle} setmodifDesc={setmodifDesc} changeTodo={changeTodo} />
            )
        } else {
            return (
                <ContentCard title={title} desc={desc}/>
            )
        }
    }
    

    
    return (
        <div className="d-flex flex-column align-items-center justify-content-between mb-4" key={ID}>
            <div className={`${status ? "btn-success" : "btn-warning"} btn w-100 mb-2 d-flex align-items-center justify-content-center position-relative`} htmlFor={ID}>
                {handleChangeCard()}
                <div className="w-25 position-absolute end-0">
                    <button className="btn w-50" onClick={() => changeCard()}>
                        <img className="w-100" src="https://upload.wikimedia.org/wikipedia/commons/5/57/Noun_project_-_crayon.svg"/>
                    </button>
                </div>
            </div>
            <button className={`${status ? "btn-warning" : "btn-success"} btn ml-2 w-25 mb-1`} onClick={() => handleStatus()}>{status ? "À faire":"Fait"} </button>
            <button className="btn btn-danger ml-2 w-25 mb-1" onClick={() => deleteTodo()}>Supprimer</button>
        </div>
    )
}