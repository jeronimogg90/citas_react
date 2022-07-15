function prueba() {
  const sumar = () => {
    const numero = 5;

    if(numero > 5){
      console.log("numero es mayor que 5");
    }
    console.log(2 + 2)
  }

  const edad = 18;

  return (
    <>
      {edad >= 18 ? 'Eres mayor de edad' : 'no lo eres'}
      <div className="App">
          <h1>Hola mundo</h1>
          <h2>{'Hola mundo'.toLowerCase()}</h2>
          <h3>{edad}</h3>
          <input type="text" />
      </div>
    </>
  )
}

