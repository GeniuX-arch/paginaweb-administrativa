import React, {component} from "react";
import 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import { useEffect } from "react";

const Gantt= ({tareas}) => {
  useEffect(() => {
    gantt.init('gantt_here');
    const tareass=[]
    console.log(tareas)
    const tareasss = tareas.map((value, index) => {
  // Convertir las fechas a objetos Date
  const fecha1 = new Date(value.FechaInicio);
  const fecha2 = new Date(value.FechaFin);

  // Calcular la diferencia en milisegundos
  const diferenciaEnMilisegundos = fecha2 - fecha1;

  // Convertir la diferencia a días
  const diasDeDiferencia = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

  // Retornar el objeto para el nuevo array
  return {
    id: index,
    text: value.Titulo,
    start_date: new Date(value.FechaInicio),
    duration: diasDeDiferencia,
  };
});
console.log(gantt)
const taskss={
    tasks: [
        
        {
            id: 5,
            text: "Interior office",
            type: "task",
            start_date: "03-04-2024 00:00",
            duration: 7,
            parent: "2",
            owner: [
                {
                    resource_id: "6",
                    value: 3,
                    start_date: "03-04-2024 00:00",
                    end_date: "05-04-2024 00:00",
                }
            ]
        },
        
    ],
    links: [],
    resources: [
        {id: 6, text: "John", unit: "hours/day" },
        {id: 7, text: "Mike", unit: "hours/day" },
        {id: 8, text: "Anna", unit: "hours/day" },
        {id: 9, text: "Bill", unit: "hours/day" },
        {id: 10, text: "Floe", unit: "hours/day" }
    ]
}
    console.log(tareasss)
    gantt.parse(taskss)
  }, []);

  
  return <div id="gantt_here" style={{ width: '100%', height: '500px' }} />;
};

export default Gantt;