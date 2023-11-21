
export default function CrearTarea(){
  const crear = (event) =>{
    event.preventDefault();
    console.log("me creaste")
  }
  const cancelar= (event) =>{
    event.preventDefault();
    console.log("cacelaste")
  }
  return(
    <div className='flex flex-col justify-center'>

    <h1>CrearTarea</h1>
    <form action="" onSubmit={crear} className="flex flex-col justify-center">
      <label htmlFor="nombre" className="">nombre</label>
      <input type="text" name='nombre' className="border-spacing-0 border-gray-500" required/>
      <label htmlFor="descripcion">Descripcion</label>
      <input type="text" name='descripcion' required/>
      <label htmlFor="fecha-inicio" >Fecha de inicio</label>
      <input type="date" name='fecha-inicio'required/>
      <label htmlFor="fecha-fin">Fecha de finalización</label>
      <input type="date" name='fecha-fin'required/>
      <button type="submit">crear</button>
      <button onClick={cancelar}>cancelar</button>

    </form>
  </div>
  )
}