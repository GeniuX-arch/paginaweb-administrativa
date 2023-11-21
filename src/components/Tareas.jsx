import { useParams } from "react-router-dom";
import  { proyectos,empleados, tareas} from '../data/datos'
import NavbarGerente from "./NavbarGerente";
import  Gantt from "./Gantt";

export default function Tareas(){
  const { id } = useParams();
  const numId=parseInt(id)
  const tareasProyecto=tareas.filter((value)=> value.Proyecto===numId+1)

  return(
    <div>
      <NavbarGerente />
      <Gantt tareas={tareasProyecto} />
      
      <div className="flex flex-row">
      {tareasProyecto.map((value,index)=>{
        return(
        <div key={index} className="m-10">
          <h1>{value.Titulo}</h1>
          <p>{value.Descripcion}</p>
          <p>{value.FechaInicio}</p>
          <h1>{value.FechaFin}</h1>
          <p>
            {
              empleados.filter(valueemp=>valueemp.id===value.EmpleadoEncargado)[0].nombre
            }
          </p>

        </div>
        )
      })    
        }
      </div>
    </div>
  )
}