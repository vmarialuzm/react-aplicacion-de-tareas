import React, {useState} from 'react'
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../hojas-de-estilo/ListaDeTareas.css';

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  

  return (
    <>
      <TareaFormulario />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) => 
          <Tarea 
            texto={tarea.texto}
            completada={tarea.completada}/>
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;
