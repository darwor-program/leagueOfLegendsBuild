import { useState } from "react"
import SelectRol from "./selectRol"


export default function Personaje () {

    const [personajes, setPersonajes] = useState([])

    const [personaje, setPersonaje] = useState({
        nombre: "",
        imagen: "",
        rol: "",
        ap: "",
        ad: ""
    })

    const [adCambio, setAdCambio] = useState("")
    const [apCambio, setApCambio] = useState("")
    const [rolCambio, setRolCambio] = useState("")

    const crearPersonaje = () => {
        const personajeCrear = {}
        if(personaje.nombre) personajeCrear.nombre = personaje.nombre
        if(personaje.ap) personajeCrear.ap = personaje.ap
        if(personaje.ad) personajeCrear.ad = personaje.ad
        if(personaje.rol) personajeCrear.rol = personaje.rol
        if(personaje.imagen) personajeCrear.imagen = personaje.imagen

        if(Object.keys(personajeCrear).length !== 5) return

        setPersonajes(prev => [...prev, {...personaje, formularioCambio: false, id: Date.now()}])
        setPersonaje({
            nombre: "",
            imagen: "",
            rol: "",
            ap: "",
            ad: ""
        })
    }

    const mostrarFormulario = (id) => {
        const personajesMostrar = personajes.map(p =>
            p.id === id
                ?   {...p, formularioCambio: !p.formularioCambio}
                : {...p, formularioCambio: false}
        );
        setPersonajes(personajesMostrar)
    }

    const guardarCambios = (id) => {
        const cambios = {}
        if(adCambio) cambios.ad = adCambio
        if(apCambio) cambios.ap = apCambio
        if(rolCambio) cambios.rol = rolCambio

        if(Object.keys(cambios).length === 0) return

        setPersonajes(personajes.map(p => 
            p.id === id ? {...p, ...cambios} : p
        ))

        setAdCambio("")
        setApCambio("")
        setRolCambio("")
    }

    const eliminarPersonaje = (id) => {
        setPersonajes(personajes.filter(p => p.id !== id))
    }



    return(
        <div className="contenido">
            <div className="creacion">
                <input 
                    type="text" 
                    placeholder="Ingresa el nombre del personaje"
                    value={personaje.nombre}
                    onChange={(e) => setPersonaje({...personaje, nombre: e.target.value})}
                />
                <select 
                    onChange={(e) => setPersonaje({...personaje, imagen: e.target.value})}
                    >
                        <option value="">Selecciona una imagen para el personaje</option>
                        <option value={kayn}>Kayn forma darkin</option>
                        <option value={aatrox}>Aatrox</option>
                        <option value={jhin}>Jhin</option>
                        <option value={mordekaiser}>Mordekaiser</option>
                        <option value={shaco}>Shaco</option>
                        <option value={shen}>Shen</option>
                        <option value={viego}>Viego</option>
                        <option value={zed}>Zed</option>
                </select>
                <SelectRol value={personaje.rol} onChange={(e) => setPersonaje({...personaje, rol: e.target.value})}/>
                <input 
                    type="number" 
                    value={personaje.ap}
                    placeholder="Ingresa el daño AP"
                    onChange={(e) => setPersonaje({...personaje, ap: e.target.value})}
                />
                <input 
                    type="number"
                    value={personaje.ad}
                    placeholder="Ingresa el daño AD"
                    onChange={(e) => setPersonaje({...personaje, ad: e.target.value})}
                />
                <button onClick={crearPersonaje}>Crear Personaje</button>
                    {personaje.imagen !== "" 
                        && (<div
                                style={{
                                    backgroundImage: `url(${personaje.imagen})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "200px",
                                    width: "200px"
                                    }}
                            ></div>
                        )}
            </div>
            <div className="contenido-personajes">
                {personajes.length === 0 ? (
                    <p>No hay personajes registrados aun</p>
                ) : (
                    personajes.map(p => (
                        <div className="contenido-informacion-personaje">
                            <div className="informacion-personaje">
                                <p>Nombre: {p.nombre}</p>
                                <p>Rol: {p.rol}</p>
                                <p>AD: {p.ad}</p>
                                <p>AP: {p.ap}</p>
                                <button onClick={() => mostrarFormulario(p.id)}>Cambiar Datos</button>
                                <button onClick={() => eliminarPersonaje(p.id)}>Eliminar personaje</button>
                            </div>
                            <div style={{
                                backgroundImage: `url(${p.imagen})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "250px",
                                width: "250px"
                                }}
                            ></div>
                                {p.formularioCambio && (
                                    <div className="formulario-cambio">
                                        <SelectRol value={rolCambio} onChange={(e) => setRolCambio(e.target.value)}/>
                                        <input 
                                            type="number" 
                                            value={apCambio}
                                            placeholder="Ingresa el daño AP"
                                            onChange={(e) => setApCambio(e.target.value)}
                                        />
                                        <input 
                                            type="number"
                                            value={adCambio}
                                            placeholder="Ingresa el daño AD"
                                            onChange={(e) => setAdCambio(e.target.value)}
                                        />
                                        <button onClick={() => guardarCambios(p.id)}>Guardar cambios</button>
                                    </div>
                                )}
                            </div>
                    ))
                )}
            </div>
        </div>
    )
}