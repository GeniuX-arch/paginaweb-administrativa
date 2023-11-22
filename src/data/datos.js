const empleados = [
    {
        id:1,
        cedula:'1',
        nombre:'Javier',
        apellido: 'Jimenez',
        cargo: 'gerente',
        proyecto: 1,
        contrasena:'123',

    },
    
    {
        id: 2,
        cedula: '987654321',
        nombre: 'María',
        apellido: 'Gómez',
        cargo: 'empleado',
        proyecto: 1,
        contrasena: 'abc123',
    },
    {
        id: 3,
        cedula: '567890123',
        nombre: 'Carlos',
        apellido: 'Martínez',
        cargo: 'empleado',
        proyecto: 2,
        contrasena: 'qwerty',
    },
    {
        id: 4,
        cedula: '345678901',
        nombre: 'Ana',
        apellido: 'López',
        cargo: 'gerente',
        proyecto: 2,
        contrasena: 'pass123',
    },
    {
        id: 5,
        cedula: '234567890',
        nombre: 'Juan',
        apellido: 'Rodríguez',
        cargo: 'empleado',
        proyecto: 1,
        contrasena: 'ilovecoding',
    },
    {
        id: 6,
        cedula: '789012345',
        nombre: 'Laura',
        apellido: 'García',
        cargo: 'empleado',
        proyecto: 2,
        contrasena: 'securepass',
    },
    {
        id: 7,
        cedula: '901234567',
        nombre: 'Pedro',
        apellido: 'Sánchez',
        cargo: 'gerente',
        proyecto: 3,
        contrasena: 'letmein',
    },
    {
        id: 8,
        cedula: '456789012',
        nombre: 'Elena',
        apellido: 'Hernández',
        cargo: 'empleado',
        proyecto: 1,
        contrasena: 'p@ssw0rd',
    },
    {
        id: 9,
        cedula: '123012345',
        nombre: 'Miguel',
        apellido: 'Ramírez',
        cargo: 'empleado',
        proyecto: 2,
        contrasena: 'mysecret',
    },
    {
        id: 10,
        cedula: '567890123',
        nombre: 'Lucía',
        apellido: 'Gutiérrez',
        cargo: 'empleado',
        proyecto: 3,
        contrasena: 'password123',
    }


];

const proyectos = [
  {
    id: 1,
    nombre: "Proyecto de Innovación Educativa: EducaFuturo",
    descripcion: "EducaFuturo es un proyecto ambicioso que busca revolucionar la educación mediante la integración de tecnologías emergentes en el aula. Con un enfoque en la personalización del aprendizaje, el proyecto implementará inteligencia artificial para adaptar el contenido educativo a las necesidades individuales de cada estudiante. Además, se desarrollará una plataforma interactiva que fomente la participación activa de los estudiantes, promoviendo un entorno de aprendizaje colaborativo. EducaFuturo tiene como objetivo preparar a las nuevas generaciones para los desafíos del futuro, fomentando habilidades como el pensamiento crítico, la resolución de problemas y la creatividad."
  },
  {
    id: 2,
    nombre: "Proyecto Ambiental: EcoVida",
    descripcion: "EcoVida es un proyecto dedicado a la sostenibilidad ambiental y la conciencia ecológica. Este proyecto abordará los desafíos ambientales actuales mediante la implementación de prácticas sostenibles. Se llevarán a cabo iniciativas para la reducción de residuos, la conservación de la biodiversidad y la promoción de energías renovables. EcoVida también se compromete a educar a la comunidad sobre la importancia de preservar el medio ambiente y adoptar un estilo de vida sostenible, creando así un impacto positivo en la salud del planeta."
  },
  {
    id: 3,
    nombre: "Proyecto Tecnológico: InnovateTech",
    descripcion: "InnovateTech es un proyecto orientado a impulsar la innovación tecnológica en diversas áreas. Se centrará en el desarrollo de soluciones tecnológicas avanzadas para abordar desafíos específicos en sectores como la salud, la agricultura y la gestión de recursos. A través de la colaboración con expertos y la aplicación de las últimas tecnologías, InnovateTech busca crear productos y servicios que mejoren la eficiencia, la accesibilidad y la calidad de vida. Este proyecto se posiciona como un catalizador para el progreso tecnológico, contribuyendo al desarrollo sostenible y al bienestar de la sociedad."
  }
];
const tareas = [
  {
    Titulo: "Desarrollo de contenido interactivo",
    Descripcion: "Creación de materiales educativos interactivos para el proyecto EducaFuturo.",
    FechaInicio: "2023-01-15",
    FechaFin: "2023-02-28",
    Proyecto: 1,
    EmpleadoEncargado: 2
  },
  {
    Titulo: "Campaña de reciclaje en la comunidad",
    Descripcion: "Organización de eventos y actividades para promover el reciclaje en el marco del proyecto EcoVida.",
    FechaInicio: "2023-03-01",
    FechaFin: "2023-04-15",
    Proyecto: 2,
    EmpleadoEncargado: 3
  },
  {
    Titulo: "Desarrollo de aplicación móvil educativa",
    Descripcion: "Creación de una aplicación móvil educativa como parte del proyecto InnovateTech.",
    FechaInicio: "2023-04-16",
    FechaFin: "2023-06-30",
    Proyecto: 3,
    EmpleadoEncargado: 10
  },
   {
    Titulo: "Programa de tutorías para estudiantes",
    Descripcion: "Implementación de un programa de tutorías como parte del proyecto EducaFuturo.",
    FechaInicio: "2023-03-03",
    FechaFin: "2023-04-05",
    Proyecto: 1,
    EmpleadoEncargado: 5
  },
  {
    Titulo: "Campaña de concientización ambiental",
    Descripcion: "Realización de eventos y campañas para concientizar sobre el medio ambiente en el proyecto EcoVida.",
    FechaInicio: "2023-08-16",
    FechaFin: "2023-10-31",
    Proyecto: 2,
    EmpleadoEncargado: 9
  },
  {
    Titulo: "Desarrollo de software de gestión educativa",
    Descripcion: "Creación de un software de gestión educativa como parte del proyecto InnovateTech.",
    FechaInicio: "2023-11-01",
    FechaFin: "2023-12-15",
    Proyecto: 3,
    EmpleadoEncargado: 10
  },
  {
    Titulo: "Desarrollo de material didáctico interactivo",
    Descripcion: "Creación de material didáctico interactivo para mejorar la enseñanza en el proyecto EducaFuturo.",
    FechaInicio: "2024-04-6",
    FechaFin: "2024-04-17",
    Proyecto: 1,
    EmpleadoEncargado: 8
  },
  {
    Titulo: "Gestión de residuos en espacios públicos",
    Descripcion: "Implementación de estrategias para la gestión de residuos en espacios públicos en el proyecto EcoVida.",
    FechaInicio: "2024-02-16",
    FechaFin: "2024-04-30",
    Proyecto: 2,
    EmpleadoEncargado: 6
  },
  {
    Titulo: "Desarrollo de plataforma de aprendizaje en línea",
    Descripcion: "Creación de una plataforma de aprendizaje en línea como parte del proyecto InnovateTech.",
    FechaInicio: "2024-05-01",
    FechaFin: "2024-06-15",
    Proyecto: 3,
    EmpleadoEncargado: 10
  },

  {
    Titulo: "Taller de ciencia y tecnología para niños",
    Descripcion: "Organización de talleres interactivos para promover la ciencia y la tecnología en el proyecto EducaFuturo.",
    FechaInicio: "2024-05-18",
    FechaFin: "2024-05-16",
    Proyecto: 1,
    EmpleadoEncargado: 2
  },
  {
    Titulo: "Reforestación en parques urbanos",
    Descripcion: "Realización de actividades de reforestación en parques urbanos como parte del proyecto EcoVida.",
    FechaInicio: "2024-08-16",
    FechaFin: "2024-10-31",
    Proyecto: 2,
    EmpleadoEncargado: 3
  },
  {
    Titulo: "Desarrollo de aplicación móvil de salud",
    Descripcion: "Creación de una aplicación móvil para promover la salud como parte del proyecto InnovateTech.",
    FechaInicio: "2024-11-01",
    FechaFin: "2024-12-15",
    Proyecto: 3,
    EmpleadoEncargado: 10
  },
];

export {empleados,proyectos, tareas};