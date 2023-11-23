import { Link } from "react-router-dom"

export default function NavbarGerente(){
  return(

      <nav className=" w-screen h-auto border-b border-slate-700 text-lg bg-slate-900">
        <ul className="flex flex-row mx-32">
          <li className=" flex w-32 h-11 border-l border-r border-slate-700"><Link to='/gerente' className="w-full h-full hover:bg-gray-400 flex justify-center items-center">Inicio</Link></li>
          <li className=" flex w-32 h-11 border-l border-r border-slate-700"><Link to='/crear-proyecto' className="w-full h-full hover:bg-gray-400 flex justify-center items-center">Crear Proyecto</Link></li>
          <li className=" flex w-32 h-11 border-l border-r border-slate-700"><Link to='/Crear-empleados' className="w-full h-full hover:bg-gray-400 flex justify-center items-center ">Crear Usuario</Link></li>
          <li className=" flex w-32 h-11"><Link to='/' className="w-full h-full hover:bg-gray-400 flex justify-center items-center">Cerrar Sesión</Link></li>
        </ul>
      </nav>


  )
}