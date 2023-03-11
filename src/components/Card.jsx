//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import React from 'react'
import './Card.css'

const Card = ({name, materia, duracion}) => {
  return (
    <div className='card'>
        <h2>Nombre del estudiante: {name}</h2>
        <h2>Materia a matricular: {materia}</h2>
        <h2>Duración en meses deseada: {duracion}</h2>
    
    </div>
  )
}

export default Card
