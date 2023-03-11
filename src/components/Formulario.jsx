import React, { useState } from 'react'
import Card from './Card';
import './Formulario.css'


const Formulario = () => {
  
    const [nombre, setNombre] = useState("")
    const [materia, setMateria] = useState("")
    const [duracion, setDuracion] = useState("")
    const [mostrarCard, setSeMostrarCard] = useState(false)


    const handleChangeName = (event) => {
        setNombre(event.target.value)
    }

    const handleChangeMateria = (event) => {
        setMateria(event.target.value)
    }

    const handleChangeDuracion = (event) => {
        setDuracion(event.target.value)
    }

    const handleSubmitMateria = (event) => {
        event.preventDefault()
        if (nombre.length <= 3 || nombre[0] === " ") {
            //setMostrarAlerta(true)
            alert("Por favor chequea que la información sea correcta")
            return
        }
        if (materia.length <= 6) {
            //setMostrarAlerta(true)
            alert("Por favor chequea que la información sea correcta")
            return
        }
        setSeMostrarCard(true)
    }


    return (
        <>
            <form className='formulario' onSubmit={handleSubmitMateria}>
                <h3>Formulario materias</h3>
                <input type="text" onChange={handleChangeName} value={nombre} placeholder="Ingresa tu nombre"/>
                <input type="text" onChange={handleChangeMateria} value={materia} placeholder="Ingresa la materia" />
                <input type="number" min={0} max={12} onChange={handleChangeDuracion} value={duracion} placeholder="Duración de la materia en meses" />
                <input  className='submit' type="submit" value="Enviar" />

            </form>
            {mostrarCard && <Card name={nombre} materia={materia} duracion={duracion} />}
        </>
  )
  
}

export default Formulario