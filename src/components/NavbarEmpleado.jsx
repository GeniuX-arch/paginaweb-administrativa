
export default function NavbarEmpleado(){
  return(
      <nav>
        <ul>
          <li><Link to='/empleado'>Home</Link></li>
          <li><Link to='/empleado-tareas'>Proyectos</Link></li>
          <li><Link to='/login'>cerrar sesion</Link></li>
        </ul>
      </nav>

  )
}