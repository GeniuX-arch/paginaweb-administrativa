import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

function CrearUsuarios() {
  
    const [formData, setFormData] = useState({
    cedula: '',
    nombre: '',
    apellido: '',
    cargo: '',
    proyecto_id: '',
    contrasena: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('%cDetente','color:red,font-size:50px');

    axios.post('http://localhost:8001/empleado', formData)
      .then((response) => {
        console.log('Respuesta del servidor nice');
      })
      .catch((error) => {
        console.error('Error al realizar la solicitud POST:', error);
      })}
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
        <form onSubmit={handleSubmit} className='flex flex-col items items-center m-12 font-custom'>
        <h1 className='mb-16 text-3xl'>Crear Usuario</h1>
        <label name="cedula">Cedula</label>
        <input type="number" name="cedula" value={formData.cedula} onChange={handleChange} className='border  border-gray-300 focus:outline-none focus:border-b-2 focus:border-b-blue-600 py-3 px-6 w-1/3'/>

        <label name="nombre" className='mt-8'>Nombre</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className='border  border-gray-300 focus:outline-none focus:border-b-2 focus:border-b-blue-600 py-3 px-6 w-1/3' />
        
        <label name="apellido" className='mt-8'>Apellido</label>
        <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} className='border  border-gray-300 focus:outline-none focus:border-b-2 focus:border-b-blue-600 py-3 px-6 w-1/3'/>

        <label name="cargo" className='mt-8'>Cargo</label>
        <select name="cargo" value={formData.cargo} onChange={handleChange} className='border  border-gray-300 focus:outline-none focus:border-b-2 focus:border-b-blue-600 py-3 px-6 w-1/3'>
            <option value="">selecciona una opición</option>
            <option value="empleado">Empleado</option>
            <option value="gerente">Gerente</option>
        </select>
        <label name="proyecto" className='mt-8'>Proyecto</label>
        <select type="text" name="proyecto_id" value={formData.proyecto} onChange={handleChange} className='border  border-gray-300 focus:outline-none focus:border-b-2 focus:border-b-blue-600 py-3 px-6 w-1/3'>
            <option value="null">selecciona una opición</option>
            <option value="1">hola</option>
        </select>

        <label name="contrasena" className='mt-8'>Contraseña</label>
        <input type="password" name="contrasena" value={formData.contrasena} onChange={handleChange} className='border  border-gray-300 focus:outline-none focus:border-b-2 focus:border-b-blue-600 py-3 px-6 w-1/3' />

        <button type="submit"className='bg-blue-700 text-white px-6 py-3 text-base w-1/3 mt-5'>Enviar</button>
        </form>
  );
  
}

export default CrearUsuarios