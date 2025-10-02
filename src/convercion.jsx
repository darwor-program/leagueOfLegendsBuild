import { useState } from "react";
import { ssrImportKey } from "vite/module-runner";

export default function Conversion(){
    const [f, setF] = useState("")
    const [c, setC] = useState("")

    const conversionF = (C) => {
        setC(C)
        setF(((parseFloat(C) * 9 / 5) + 32).toFixed(2))
    }
    
    const conversionC = (F) => {
        setF(F)
        setC(((parseFloat(F) - 32) *  5 / 9).toFixed(2))
    }

    return(
        <div style={{}}>
            <h1>Conversion Celsius a Fahrenheit</h1>
            <h2>Celsius</h2>
            <input
                value={c}
                type="number"
                onChange={(e) => conversionF(e.target.value)}
                placeholder="Ingresa °C"
                style={{padding: "8px", margin: "10px", fontSize: "16px"}}
            />
            <h2>Fahrenheit</h2>
            <input
                value={f}
                type="number"
                onChange={(e) => conversionC(e.target.value)}
                placeholder="Ingresa °F"
                style={{padding: "8px", margin: "10px", fontSize: "16px"}}
            />
        </div>
    )
}