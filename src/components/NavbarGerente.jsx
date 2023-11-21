import { Link } from "react-router-dom"

export default function NavbarGerente(){
  return(

      <nav className=" w-screen h-auto border-b border-gray-400 text-lg">
        <ul className="flex flex-row mx-32">
          <li className=" flex w-32 h-11"><Link to='/gerente' className="w-full h-full hover:bg-gray-400 flex justify-center items-center">Inicio</Link></li>
          <li className=" flex w-32 h-11"><Link to='/login' className="w-full h-full hover:bg-gray-400 flex justify-center items-center">Cerrar Sesión</Link></li>
          <li className=" flex w-32 h-11"><Link to='/proyecto' className="w-full h-full hover:bg-gray-400 flex justify-center items-center">Crear Proyecto</Link></li>
          <li className=" flex w-32 h-11"><Link to='/Crear-empleados' className="w-full h-full hover:bg-gray-400 flex justify-center items-center">Crear Usuario</Link></li>
        </ul>
      </nav>


  )
}