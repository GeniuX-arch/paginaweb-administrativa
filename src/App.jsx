

import { Route, Routes, Link, Navigate, BrowserRouter } from 'react-router-dom'
import { ProviderAutenticado, usarIngresado} from './context/infoLogin'
import { Login,HomeGerente,CrearTarea,Tareas,HomeEmpleado, CrearUsuarios,CrearProyecto } from './components/index'

  /*const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then(res=> setData(res.data))
    .catch(err=>console.log(err));
  },[])*/
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
        <Route path="/paginaweb-administrativa" element={<ProviderAutenticado><Login /></ProviderAutenticado>} />
        <Route path="/gerente" element={<ProviderAutenticado><ProtectedRouteGerent >< HomeGerente /></ProtectedRouteGerent></ProviderAutenticado>} />
        <Route path="/empleado" element={<HomeEmpleado />} />
        <Route path="/crear-proyecto" element={<CrearProyecto />} />
        <Route path="/crear-tarea" element={<CrearTarea />} />
        <Route path="/tareas/:id" element={<Tareas />} />
        <Route path="/crear-empleados" element={<CrearUsuarios />} />
        </Routes>
    </div>
  )
}

export default App
