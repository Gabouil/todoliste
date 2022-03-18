import React, { Component, useEffect, useState } from "react"
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID"
import Angle from "../Component/Gradient/Angle"
import Colors from "../Component/Gradient/Colors"


export default function Gradient() {
    const [colorsList, setcolorsList] = useState([{id:1,hexa:"#c173c1"},{id:2,hexa:"#f39d9e"},{id:3,hexa:"#317c04"}])
    const [deg, setdeg] = useState(300)
    const [type, settype] = useState(true)

    // const [gradientBackground, setgradientBackground] = useState(colorsList[0].hexa + " , " + colorsList[1].hexa + " , " + colorsList[2].hexa)

    // const plusBreackpoint = (e) => {
    //     e.preventDefault()
    //     setcolorsList(...colorsList, {id:colorsList.length+1, hexa:"#ffffff"})
    //     console.log(colorsList)
    // }

    // const moinBreackpoint = (e) => {
    //     e.preventDefault()
    //     setcolorsList(colorsList.pop())
    //     console.log(colorsList)
    // }


    const randomColor = (e) => {
        e.preventDefault()
        let value1 = "#" + Math.floor(Math.random()*16777215).toString(16)
        let value2 = "#" + Math.floor(Math.random()*16777215).toString(16)
        let value3 = "#" + Math.floor(Math.random()*16777215).toString(16)
        setcolorsList([{id:1,hexa:`${value1}`},{id:2,hexa:`${value2}`},{id:3,hexa:`${value3}`}])
    }




    return(
        <div    className="w-100 d-flex align-items-center justify-content-center flex-column" style={{height: "100vh",
        // c'est pas beau mais ça marche bien sorry pour les yeux :D
                                                                                                        background: type ?
                                                                                                        "linear-gradient(" + deg + "deg, " + colorsList[0].hexa + " , " + colorsList[1].hexa + " , " + colorsList[2].hexa + " )" 
                                                                                                        : 
                                                                                                        "radial-gradient(" + colorsList[0].hexa + " , " + colorsList[1].hexa + " , " + colorsList[2].hexa + " )", 

                                                                                                        background: type ?
                                                                                                        "-moz-linear-gradient(" + deg + "deg, " + colorsList[0].hexa + " , " + colorsList[1].hexa + " , " + colorsList[2].hexa + " )" 
                                                                                                        : 
                                                                                                        "-moz-radial-gradient(" + colorsList[0].hexa + " , " + colorsList[1].hexa + " , " + colorsList[2].hexa + " )",

                                                                                                        background: type ?
                                                                                                        "-webkit-linear-gradient(" + deg + "deg, " + colorsList[0].hexa + " , " + colorsList[1].hexa + " , " + colorsList[2].hexa + " )" 
                                                                                                        : 
                                                                                                        "-webkit-radial-gradient(" + colorsList[0].hexa + " , " + colorsList[1].hexa + " , " + colorsList[2].hexa + " )"}}>
            <div className="w-100 d-flex align-items-center justify-content-center gap-3 mb-3" >
                <Colors key={colorsList[0].id} colorsList={colorsList[0]} colorsListComplet={colorsList} setcolorsList={setcolorsList} id={colorsList[0].id}/>
                <Colors key={colorsList[1].id} colorsList={colorsList[1]} colorsListComplet={colorsList} setcolorsList={setcolorsList} id={colorsList[1].id}/>
                <Colors key={colorsList[2].id} colorsList={colorsList[2]} colorsListComplet={colorsList} setcolorsList={setcolorsList} id={colorsList[2].id}/>
            </div>
            {type ? 
                <div className="w-100 d-flex align-items-center justify-content-center gap-3 mb-3">
                    <Angle deg={deg} setdeg={setdeg}/>
                </div>
                :
                <div className="w-100 d-flex align-items-center justify-content-center gap-3 mb-3">
                    <p>il est beau ce radial :0</p>
                </div>
                }

            <div className="w-100 d-flex align-items-center justify-content-center gap-3 mb-3">
                <button className="btn btn-primary"
                        onClick={randomColor}
                >random</button>
                <button className="btn btn-secondary"
                        onClick={() => settype(type ? false : true)}
                >{type ? "radial" : "linear"}</button>
            </div>
        </div>
    )
}