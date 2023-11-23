import React from 'react'
import NavbarGerente from './NavbarGerente'

export default function CrearProyecto() {
  return (
        <form  className='flex flex-col items items-center m-12 font-custom'>
        <h1 className='mb-16 text-3xl'>Crear proyecto</h1>
        <label name="titulo" className=''>Titulo</label>
        <input type="number" name="titulo"  className='border  border-gray-300 focus:outline-none focus:border-b-2 focus:border-b-purple-600 py-3 px-6 w-1/3 text-black'/>
        <label name="descripcion" className='mt-8'>Descripcion</label>
        <input type="text" name="descripcion"  className='border  border-gray-300 focus:outline-none focus:border-b-2 focus:border-b-purple-600 py-3 px-6 w-1/3 text-black'/>

        <label name="apellido" className='mt-8'>Fecha inicio</label>
        <input type="date" name="apellido" className='border  border-gray-300 focus:outline-none focus:border-b-2 focus:border-b-purple-600 py-3 px-6 w-1/3 text-black'/>

        <label name="nombre" className='mt-8'>Fecha fin</label>
        <input type="date" name="nombre"  className='border  border-gray-300 focus:outline-none focus:border-b-2 focus:border-b-purple-600 py-3 px-6 w-1/3 text-black' />

        <label name="cargo" className='mt-8'>empleado</label>
        <select name="cargo"  className='border  border-gray-300 focus:outline-none focus:border-b-2 focus:border-b-purple-600 py-3 px-6 w-1/3 text-black'>
            <option value="">selecciona una opición</option>
            <option value="empleado">empleado1</option>
            <option value="gerente">empleado2</option>
        </select>


        <button type="submit"className='bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 text-base w-1/3 mt-5 '>Enviar</button>
        </form>

  )
}
