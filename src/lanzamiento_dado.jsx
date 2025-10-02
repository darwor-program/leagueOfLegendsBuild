import { useState } from "react";

export default function Dados(){
    const [dadoUno, setDadoUno] = useState(0);
    const [dadoDos, setDadoDos] = useState(0);

    const funcionLanzarDados = () => {
        setDadoUno(Math.floor(Math.random() * 6) + 1)
        setDadoDos(Math.floor(Math.random() * 6) + 1)
    }

    return(
        <div>
            <h1>{dadoUno}</h1>
            <h1>{dadoDos}</h1>
            <button
                onClick={funcionLanzarDados}
                style={{
                    margin: "5px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer"
                }}
                >
                    Lanzar Dados
                </button>
        </div>
    )
}