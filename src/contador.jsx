import { useState } from "react";

export default function Contador(){
    const [contador, setContador] = useState(0)

    const incrementar = () => {
        setContador(contador + 1);
    };

    const decrementar = () => {
        setContador(contador-1);
    };

    const reiniciar = () => {
        setContador(0);
    };

    return(
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <h1>Contador: {contador}</h1>
            <button
                onClick={incrementar}
                style={{
                    margin: "5px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer"
                }}
            >
                Incrementar
            </button>
            <button
                onClick={reiniciar}
                style={{
                    margin: "5px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer"
                }}
                >
                    Reiniciar
                </button>
            <button
                onClick={decrementar}
                style={{
                    margin: "5px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer"
                }}>
                    Decrementar
                </button>
        </div>
    )
}