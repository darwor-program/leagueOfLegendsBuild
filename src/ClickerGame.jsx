import { useState } from "react";

export default function ClickerGame(){
    const [score, setScore] = useState(0);

    const aumentarClick = () => {
        setScore(score + 1);
    };

    const resetGame = () => {
        setScore(0);
    };

    return(
        <div
            style={{
                backgroundColor: "#111",
                color: "white",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Arial, sans-serif",
            }}>
                <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>🎮 Clicker Game</h1>
                <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>Puntos: {score}</p>
                <button
                    onClick={aumentarClick}
                    style={{
                    backgroundColor: "green",
                    color: "white",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    border: "none",
                    marginBottom: "10px",
                    cursor: "pointer",
                }}
            >
                +1 Punto
            </button>

            <button
                onClick={resetGame}
                style={{
                backgroundColor: "red",
                color: "white",
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                }}
            >
                Reiniciar
            </button>
        </div>
            
    )
}
