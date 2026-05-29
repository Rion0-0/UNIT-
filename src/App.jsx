import React from "react";

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg,#020617,#312e81,#7e22ce)",
      color: "white",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "2rem"
    }}>
      <div>
        <p style={{
          letterSpacing:"0.3em",
          textTransform:"uppercase",
          opacity:0.7,
          marginBottom:"1rem"
        }}>
          Credit Quest System
        </p>

        <h1 style={{
          fontSize:"4.5rem",
          marginBottom:"1rem",
          fontWeight:900
        }}>
          UNITÉ ✨
        </h1>

        <p style={{
          fontSize:"1.2rem",
          opacity:0.9,
          maxWidth:"500px",
          margin:"0 auto"
        }}>
          単位回収を、ゲームに変える。
        </p>
      </div>
    </div>
  );
}
