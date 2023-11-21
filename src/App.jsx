

import { Route, Routes, Link, Navigate  } from 'react-router-dom'
import { ProviderAutenticado, usarIngresado} from './context/infoLogin'
import { Login,HomeGerente,CrearTarea,Tareas,HomeEmpleado,Gantt, CrearUsuarios} from './components/index'
import axios from 'axios'

  /*const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then(res=> setData(res.data))
    .catch(err=>console.log(err));
  },[])*/


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
const ProtectedRouteGerent = ({ children })=>{
  const {esAutenticado, datos} =usarIngresado()
  if(!esAutenticado  && datos[2]!=='gerente'){
    return <Navigate to='/'/>
  }
  return children
}



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProviderAutenticado><Login /></ProviderAutenticado>} />
        <Route path="/gerente" element={<ProviderAutenticado><ProtectedRouteGerent >< HomeGerente /></ProtectedRouteGerent></ProviderAutenticado>} />
        <Route path="/empleado" element={<HomeEmpleado />} />
        <Route path="/gantt" element={<Gantt />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/proyecto" element={<Proyecto />} />
        <Route path="/crear-proyectos" element={<CrearProyectos />} />
        <Route path="/crear-tarea" element={<CrearTarea />} />
        <Route path="/tareas/:id" element={<Tareas />} />
        <Route path="/crear-empleados" element={<CrearUsuarios />} />
      </Routes>
    </div>
  )
}

export default App
