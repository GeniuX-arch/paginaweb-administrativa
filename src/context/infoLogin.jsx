
import { useState, createContext, useContext} from 'react'
import  {empleados} from '../data/datos'

console.log(empleados)
const Ingresado=createContext()


export function usarIngresado(){
    const Ingresado1 = useContext(Ingresado)
    return Ingresado1
}

export function ProviderAutenticado({children}){
  
  const [esAutenticado, setEsAutenticado] = useState(false);
  const [datos, setDatos] = useState([]);

  function loginn(usuario,password){
    let flag=[false,''];
    empleados.map((value)=>{
      if(value.contrasena==password && value.cedula==usuario){
        setEsAutenticado(true);
        setDatos(value);
        flag[1]=value.cargo
        flag[0]= true; 
      }
    })
      return flag;
      
    
  }
  function logout(){
    setEsAutenticado(false);
    return false;
  }


  return(
    <Ingresado.Provider value={{esAutenticado,loginn,logout,datos}}>
      {children}
    </Ingresado.Provider>
  ) 

}

