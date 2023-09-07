// Importar react
import React from "react";

// Mis imports
import Saludo from "./Saludo";
import Mensaje from "./Mensaje";

function App(){
  return (
    <div>
      <Saludo nombre="Jose"/>
      <Mensaje mensaje="Esto es un mensaje desde una etiqueta <p>"/>
    </div>
  )
}

export default App;