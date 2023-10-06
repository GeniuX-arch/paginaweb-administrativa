import { useState, useEffect, createContext, useContext} from 'react'
import './App.css'
import { Route, Routes, Link, useNavigate, Navigate  } from 'react-router-dom'
import axios from 'axios'

function Home(){
  /*const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then(res=> setData(res.data))
    .catch(err=>console.log(err));
  },[])*/
  return(
    <>
      <h1>tareas</h1>
    
    </>
  )
}


const Ingresado=createContext()


function usarIngresado(){
    const Ingresado1 = useContext(Ingresado)
    return Ingresado1
}

function ProviderAutenticado({children}){
  
  const login=['1','1','gerente'];
  const [esAutenticado, setEsAutenticado] = useState(false);
  const [datos, setDatos] = useState([]);

  function loginn(usuario,password){
    if(login[1]==password && login[0]==usuario){
      setEsAutenticado(true);
      setDatos(login[2]);
      return true;
    }
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

function Login(){
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const {loginn} = usarIngresado();

  const navigate = useNavigate()
  
  function  handleClick(event){
  if(loginn(usuario,password)){
    console.log("SIIIIIIIIIIII")
    navigate('/gerente')
  }else{
    event.preventDefault();
    console.log("NO")
    setError('Usuario o contraseña incorrectos. Vuelva a Intentarlo')
    setUsuario('') 
    setPassword('');
  }
}
  return(
    <div className='login'>
      <h1>Iniciar sesión</h1> 
      <form className='form' onSubmit={handleClick}> 

        <div className='formulario usuario'>
        <label htmlFor="usuario">Usuario</label>
        <input type="text" name='usuario' placeholder='Usuario' value={usuario} onChange={(e)=>setUsuario(e.target.value)} required/>
        </div>
        <div className='formulario contrasena'>
        <label htmlFor="pass">Contraseña</label>
          <input type="password" name="pass" placeholder='Contraseña' value={password} className='Campo' onChange={(e)=>setPassword(e.target.value)} required/>

        <p className="error">{error}</p>
        </div>
        <div className='formulario boton'>
        <button type='submit'>Continuar</button>

        </div>
      </form>

    </div>
  )

}
function Gantt(){
  return(
    <h1>Gantt</h1>
  )
}
function Proyecto(){
  return(
    <div>
      <h1>proyecto</h1>
      <Gantt />
      <Tareas />
      <Link to='/crear-tarea'>crearTareas</Link>
    </div>


  )
}
function Proyectos(){
  return(
    <div>
      <h1>proyectos</h1>
      <Link to='/proyecto'>proyecto</Link>
      <Link to='/crear-proyectos'>Crear-proyecto</Link>

    </div>
  )
}
function CrearProyectos(){
  return(
    <h1>crearProyectos</h1>
  )
}
function CrearTarea(){
  return(
    <h1>CrearTarea</h1>
  )
}
function Tareas(){
  return(
    <div>
      <h1>Tareas</h1>
      <Link to='/tarea'>tarea</Link>
    </div>
  )
}
function Tarea(){
  return(
    <h1>Tarea</h1>
  )
}
const ProtectedRouteGerent = ({ children })=>{
  const {esAutenticado, datos} =usarIngresado()
  if(!esAutenticado  && datos[2]!=='gerente'){
    return <Navigate to='/'/>
  }
  return children
}

function Notificaciones(){
  return(
    <div>

    </div>
  )
}

function NavbarEmpleado(){
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
function HomeGerente(){
  const {datos} = usarIngresado()
  console.log(datos)
  return(
    <div>
      <NavbarGerente />
      <div className="padre">
        <div clasName="revisar">
          <p>Hola bienvenido {datos}</p>
          <p>tienes 4646 informes por revisar</p>
        </div>
        <div clasName="informes">
          <h1>Informes</h1>
          <p>Descripcion infomres</p>
        </div>
      </div>
    </div>
  )
}
function HomeEmpleado(){
  return(
    <p>hola empleado</p>
  )
}
function NavbarGerente(){
  return(

      <nav>
        <ul>
          <li><Link to='/gerente'>Inicio</Link></li>
          <li><Link to='/login'>Cerrar sesion</Link></li>
          <li><Link to='/proyectos'>Proyectos</Link></li>
        </ul>
      </nav>


  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProviderAutenticado><Login /></ProviderAutenticado>} />
        <Route path="/gerente" element={<ProviderAutenticado><ProtectedRouteGerent >< HomeGerente /></ProtectedRouteGerent></ProviderAutenticado>} />
        <Route path="/empleado" element={< HomeEmpleado />} />
        <Route path="/gantt" element={<Gantt />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/proyecto" element={<Proyecto />} />
        <Route path="/crear-proyectos" element={<CrearProyectos />} />
        <Route path="/crear-tarea" element={<CrearTarea />} />
        <Route path="/tareas" element={<Tareas />} />
        <Route path="/tarea" elemenet={<Tarea />} />
      </Routes>
    </div>
  )
}

export default App
