import { useParams } from "react-router-dom";
import  { proyectos,empleados, tareas} from '../data/datos'
import NavbarGerente from "./NavbarGerente";
import { Gantt } from 'gantt-task-react'
import "gantt-task-react/dist/index.css";

export default function Tareas(){
  const { id } = useParams();
  const numId=parseInt(id)
  
  const tareasProyecto=tareas.filter((value)=> value.Proyecto===numId+1)

  const tasks= tareasProyecto.map((value, index) => {

  return {
    start: new Date(value.FechaInicio),
    end: new Date(value.FechaFin),
    name:value.Titulo,
    id:index,
    type:'task',
    progress:100,
    isDisabled:true,
    styles:{
    }
  };
});

  return(
    <div>
      
      <NavbarGerente />


      <div className="flex flex-col mx-32">

      <h1 className="ml-5 my-5 text-xl"> {proyectos[numId].nombre}</h1>
      <button className="rounded-full bg-green-800 w-10 h-10 text-center hover:bg-green-900">+</button>
      <div className="flex flex-row flex-wrap">      
      {tareasProyecto.map((value,index)=>{
        return(
        <div key={index} className="h-auto flex w-3/12 flex-col m-5 border border-slate-700 p-5 bg-slate-900 rounded-md">
          <h1 className="font-bold text-lg mb-2">{value.Titulo}</h1>
          <p className="mb-2"> <span className="font-bold">encargado: </span>
            {
              empleados.filter(valueemp=>valueemp.id===value.EmpleadoEncargado)[0].nombre
            }
          </p>
          <p className="mb-2">{value.Descripcion}</p>
          <p className="text-sm">{value.FechaInicio}  <span className="ml-3">{value.FechaFin}</span></p>
          <div className="w-auto">
          <button className="bg-purple-800 w-1/2 hover:bg-purple-900">comentar</button>
          <button className="bg-red-800 w-1/2 hover:bg-red-900">eliminar</button>
          </div>

        </div>
        )
      })    
        }
      </div>
      <div className="m-10 bg-white text-black">
        <Gantt tasks={tasks} StylingOption={{headerHeight:1,columnWidth:3,barBackgroundColor:'black',todayColor:'#000'}} EventOption={{timeStep:1000}} style={{
     with: '',  }}  />

      </div>
      </div>
    </div>
  )
}