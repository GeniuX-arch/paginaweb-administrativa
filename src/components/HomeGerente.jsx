import { Link } from "react-router-dom"
import NavbarGerente from "./NavbarGerente"
import { usarIngresado } from "../context/infoLogin"
import  { proyectos,empleados } from '../data/datos'
import { useState } from "react"


export default function HomeGerente(){
  
  const {datos} = usarIngresado()
  const [itemSelect, setItemSelect] = useState(0);
  console.log(itemSelect)
  return(
    <div className="bg-slate-800 text-white ">
      <NavbarGerente />
      <div className="mx-32 flex flex-col font-custom  justify-center">
        <div className="p-4 m-1 items-center">
            <h1 className="font-bold text-lg">Listado de proyectos</h1>
        </div>
        <div className="flex flex-row">
        <div className="w-9/12 flex flex-wrap flex-row h-10">
         {proyectos.map((value, index) => {
            const click = (index)=>{
                setItemSelect(index)
            }
            return (
            <div key={index} className="flex w-3/12 flex-col m-5 border border-slate-700 p-5 hover:cursor-pointer bg-slate-900 rounded-md" onClick={()=> click(index)}>
               <h1 className="font-bold" >{value.nombre}</h1>
               <p className="truncate">{value.descripcion}</p>
            </div>
           )
         })}
        </div>

        <div className="flex w-3/12  bg-slate-900 p-5 rounded-lg border border-slate-700">
          <div className="flex flex-col">
            <Link className="bg-purple-600 hover:bg-purple-900 text-white w-auto px-3 py-1 text-center mb-5" to={'/tareas/'+itemSelect}>Ver más detalles</Link>
            <h1 className="font-bold mb-3">{proyectos[itemSelect].nombre}</h1>
            <h1 className="font-bold">gerente:</h1>
          {empleados.map((value, index) => {
              if(value.cargo=='gerente' && value.proyecto==itemSelect+1){
              return (
              <div key={index} className="m-3" >
                  <h1 className="" >{value.nombre} {value.apellido}</h1>
              </div>
            )
                
              }
          })}
            <h1 className="font-bold">empleados:</h1>
            <ul>
          {empleados.map((value, index) => {
              if(value.cargo=='empleado' && value.proyecto==itemSelect+1){
              return (
              <li key={index} className="m-3" >
                <h1 className="" >{value.nombre} {value.apellido}</h1>
              </li>
            )
              }
          })}
          </ul>
          <h1 className="font-bold mb-2">Descripción:</h1>
            <p>{proyectos[itemSelect].descripcion}</p>
         </div>

        </div>
        </div>
      </div>
    
    </div>
  )
}