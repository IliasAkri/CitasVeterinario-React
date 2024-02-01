import React from 'react'
import Paciente from './Paciente'
import { useEffect } from 'react'

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente}) {

  useEffect(() => {
    if (pacientes.length > 0) {
      //console.log('Hay un nuevo paciente')
    }}, [pacientes])

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {pacientes && pacientes.length ? 
        <>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
          <p className='mt-5 text-lg text-center mb-10'>
            Adminístra tus {''} <span className='font-bold text-indigo-600'>pacientes y citas</span>
          </p>
          {pacientes.map(paciente => {
            return (
              <Paciente
              key = {paciente.id}
              paciente = {paciente}
              setPaciente = {setPaciente}
              eliminarPaciente = {eliminarPaciente}

              />
            )
          })}
        </>
      : 
        <>
        <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
        <p className='mt-5 text-lg text-center mb-10'>
          Comienza agregando pacientes {''} <span className='font-bold text-indigo-600'>y aparecerán en este lugar</span>
        </p>
        </>
      }
    </div>
  )
}

export default ListadoPacientes
