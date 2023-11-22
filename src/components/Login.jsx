import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { usarIngresado } from '../context/infoLogin'



export default function Login(){
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const {loginn} = usarIngresado();


  const navigate = useNavigate();
  
  function  handleClick(event){
  const login=loginn(usuario,password) 
  console.log(login)
  if(login[0]){
    navigate('/'+login[1])
  }else{
    event.preventDefault();
    setError('Usuario o contraseña incorrectos. Vuelva a Intentarlo')
    setUsuario('') 
    setPassword('');
  }
}
  return(
    <div className='flex flex-col justify-between text-center mt-16 text-base font-custom'>
      <h1 className='text-2xl'>Iniciar sesión</h1> 
      <form className='flex flex-col justify-between' onSubmit={handleClick} > 

        <div className='flex flex-col items-center justify-between mt-11'>
        <label htmlFor="usuario" >Cedula</label>
        <input type="text" name='usuario' placeholder='Usuario' className='border  border-gray-300 focus:outline-none focus:border-b-2 focus:border-b-purple-700 py-3 px-6 w-1/3 text-black' value={usuario} onChange={(e)=>setUsuario(e.target.value)} required/>
        </div>
        <div className='flex flex-col items-center justify-between mt-11'>
        <label htmlFor="pass">Contraseña</label>
          <input type="password" name="pass" placeholder='Contraseña' value={password} className='border border-gray-300 focus:outline-none focus:border-b-purple-700 focus:border-b-2 py-3 px-6 w-1/3 text-black' onChange={(e)=>setPassword(e.target.value)} required/>

        <p className="text-red-500">{error}</p>
        </div>
        <div className='itemitemss-center'>
            <button type='submit' className='bg-purple-700 text-white px-6 py-3 text-base w-1/3 mt-5 hover:bg-purple-900 text-left'>Continuar</button>
        </div>

      </form>

    </div>
  )

}