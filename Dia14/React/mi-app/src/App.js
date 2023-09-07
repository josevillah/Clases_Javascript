import React from 'react';

function App(props) {
  let [contador, setearConteo] = React.useState(0);

  let sumarContador = () => {
    setearConteo(contador + 1);
  }

  return (
    <div style={{backgroundColor: props.colorFondo}}>
      <h1 style={{color: props.colorTexto}}>Contador: {contador}</h1>
      <button onClick={sumarContador}>Incrementar</button>
    </div>
  )
}

export default App;
