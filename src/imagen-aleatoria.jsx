import { useState } from "react"

import Aatrox from "./assets/Aatrox_0.jpg"
import Ahri from "./assets/Ahri_0.jpg"
import Akali from "./assets/Akali_0.jpg"
import Akshan from "./assets/Akshan_0.jpg"
import Alistar from "./assets/Alistar_0.jpg"
import Amumu from "./assets/Amumu_0.jpg"
import Anivia from "./assets/Anivia_0.jpg"
import Annie from"./assets/Annie_0.jpg"
import Aphelios from"./assets/Aphelios_0.jpg"
import Ashe from"./assets/Ashe_0.jpg"
import AurelionSol from"./assets/AurelionSol_0.jpg"
import Azir from"./assets/Azir_0.jpg"
import Bard from"./assets/Bard_0.jpg"

import Electrocute from "./assets/Electrocute.png"
import DarkHarvest from "./assets/DarkHarvest.png"
import HailOfBlades from "./assets/HailOfBlades.png"
import Predator from "./assets/Predator.png"

import item6691 from "./assets/6691.png"
import item6692 from "./assets/6692.png"
import item6693 from "./assets/6693.png"
import item6694 from "./assets/6694.png"
import item6695 from "./assets/6695.png"
import item6696 from "./assets/6696.png"
import item8001 from "./assets/8001.png"
import item8020 from "./assets/8020.png"


const imagenes = [Aatrox, Ahri, Akali, Akshan, Alistar, Amumu, Anivia, Annie, Aphelios, Ashe, AurelionSol, Azir, Bard]
const runas = [Electrocute, DarkHarvest, HailOfBlades, Predator]
const items = [item6691, item6692,item6693, item6694, item6695, item6696, item8001, item8020]

export default function ImagenAleatoria() {
    const [imagen, setImagen] = useState(imagenes[0])
    const [imagenRuna, setImagenRuna] = useState(runas[0])
    const [imagenItem1, setImagenItem1] = useState([items[0]])
    const [imagenItem2, setImagenItem2] = useState([items[0]])
    const [imagenItem3, setImagenItem3] = useState([items[0]])

    const [girando, setGirando] = useState(false)

    const [intervalId, setIntervalId] = useState(null)
    const [intervaloRunas, setIntervaloRunas] = useState(null)
    const [intervaloItem1, setIntervaloItem1] = useState(null)
    const [intervaloItem2, setIntervaloItem2] = useState(null)
    const [intervaloItem3, setIntervaloItem3] = useState(null)

    
    const iniciar = () => {
        if(girando) return
        setGirando(true)

        const id = setInterval(() => {
            setImagen((prev) => {
                let imagenPrev = imagenes[Math.floor(Math.random() * imagenes.length)]
                while(imagenPrev === prev){
                    imagenPrev = imagenes[Math.floor(Math.random() * imagenes.length)]
                }
                return imagenPrev
            })
        }, 100)

        const idRunas = setInterval(() => {
            setImagenRuna((prev) => {
                let imagenPrev = runas[Math.floor(Math.random() * runas.length)]
                while(imagenPrev === prev){
                    imagenPrev = runas[Math.floor(Math.random() * runas.length)]
                }
                return imagenPrev
            })
        }, 100)

        const idItem1 = setInterval(() => {
            setImagenItem1((prev) => {
                let imagenPrev = items[Math.floor(Math.random() * items.length)]
                while(imagenPrev === prev){
                    imagenPrev = items[Math.floor(Math.random() * items.length)]
                }
                return imagenPrev
            })
        }, 100)

        const idItem2 = setInterval(() => {
            setImagenItem2((prev) => {
                let imagenPrev = items[Math.floor(Math.random() * items.length)]
                while(imagenPrev === prev ){
                    imagenPrev = items[Math.floor(Math.random() * items.length)]
                }
                return imagenPrev
            })
        }, 100)

        const idItem3 = setInterval(() => {
            setImagenItem3((prev) => {
                let imagenPrev = items[Math.floor(Math.random() * items.length)]
                while(imagenPrev === prev ){
                    imagenPrev = items[Math.floor(Math.random() * items.length)]
                }
                return imagenPrev
            })
        }, 100)

        setIntervalId(id)
        setIntervaloRunas(idRunas)
        setIntervaloItem1(idItem1)
        setIntervaloItem2(idItem2)
        setIntervaloItem3(idItem3)
    }

    const parar = () => {
        if(intervalId) clearInterval(intervalId)
        if(intervaloRunas) clearInterval(intervaloRunas)
        if(intervaloItem1) clearInterval(intervaloItem1)
        if(imagenItem2 !== imagenItem1)clearInterval(intervaloItem2)
        if(imagenItem3 !== imagenItem1 && imagenItem3 !== imagenItem2)clearInterval(intervaloItem3)
        setGirando(false)
    }

    return(
        <div className="juego-imagenes">
            <button onClick={iniciar}>iniciar</button>
            <button onClick={parar}>parar</button>
            <div
                style={{
                    backgroundImage: `url(${imagen})`,
                    height: "200px",
                    width: "200px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    border: "2px solid black",
                }}>    
            </div>
            <div className="imagen-runa"
                style={{
                    backgroundImage: `url(${imagenRuna})`,
                }}>    
            </div>
            <div className="items">
                <div className="item"
                    style={{
                        backgroundImage: `url(${imagenItem1})`,
                        height: "50px",
                        width: "50px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        border: "2px solid black",
                    }}>    
                </div>
                <div className="item2"
                    style={{
                        backgroundImage: `url(${imagenItem2})`,
                    }}>    
                </div>
                <div className="item"
                    style={{
                        backgroundImage: `url(${imagenItem3})`,
                        height: "50px",
                        width: "50px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        border: "2px solid black",
                    }}>    
                </div>
            </div>
            
        </div>
    )
}