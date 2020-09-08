import React, { useState, useEffect } from 'react'
import usuario from './models/usuario'

export default function Test({ data }) {

  const [state, setState] = useState({ nombre: '', apellidos: '' })


  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = new usuario(state)
    const oldLocalstorage = localStorage.getItem('adri') || '{"usuarios": []}'
    const parsedLocalStorage = JSON.parse(oldLocalstorage) 
    parsedLocalStorage.usuarios.push(newUser)
    localStorage.setItem('adri', JSON.stringify(parsedLocalStorage))
  }

  const handleState = e => {
    const { value, name } = e.target
    setState((oldState) => ({...oldState, [name]: value }))
  }

  return (
    <>
    <div>
      hola
    </div>
    <form onSubmit={(e) => handleSubmit(e)}>
      <input name="nombre" onChange={handleState} value={state.nombre} />
      <input name="apellidos" onChange={handleState} value={state.apellidos}/>
      <button>hola</button>
    </form>
    <div onClick={() => setState('adios')}>adios</div>
    </>
  )
}
