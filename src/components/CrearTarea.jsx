
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
        <input type="text" name="nombre" className='border  border-gray-300 focus:outline-none focus:border-b-2 focus:border-b-blue-600 py-3 px-6 w-1/3'/>
      <label htmlFor="descripcion">Descripcion</label>
        <input type="text" name="descripcion" value={formData.apellido} onChange={handleChange} className='border  border-gray-300 focus:outline-none focus:border-b-2 focus:border-b-blue-600 py-3 px-6 w-1/3'/>
      <label htmlFor="fecha-inicio" >Fecha de inicio</label>
        <input type="date" name="fecha-inicio" value={formData.apellido} onChange={handleChange} className='border  border-gray-300 focus:outline-none focus:border-b-2 focus:border-b-blue-600 py-3 px-6 w-1/3'/>
      <label htmlFor="fecha-fin">Fecha de finalización</label>
        <input type="date" name="fecha-fin" value={formData.apellido} onChange={handleChange} className='border  border-gray-300 focus:outline-none focus:border-b-2 focus:border-b-blue-600 py-3 px-6 w-1/3'/>
      <button type="submit">crear</button>
      <button onClick={cancelar}>cancelar</button>





    </form>
  </div>
  )
}