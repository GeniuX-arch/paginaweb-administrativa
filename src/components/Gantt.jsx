import React, {component} from "react";
import 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import { useEffect } from "react";

const Gantt= (...tareas) => {
  useEffect(() => {
    gantt.init('gantt_here');
    const tareass=[]
    for(let i=0; i<tareas.length; i++){
      
      tareass.push({ id:i , text:tareas[i].Titulo, start_date:tareas[i].FechaInicio, duration: 5 })
      console.log({ id:i , text:tareas[i].Titulo, start_date:tareas[i].FechaInicio, duration: 5 })
    }
    console.log(tareass)
  
    console.log(tareass)
    gantt.parse(tareass)
  }, []);

  
  return <div id="gantt_here" style={{ width: '100%', height: '500px' }} />;
};

export default Gantt;