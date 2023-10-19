import React from 'react'
import { useContext } from 'react'
import Form from './Form'
import { TodoProvaider } from '../store/TodoProvaider'

const Data = () => {
    const context = useContext(TodoProvaider)
  return (
    <div>
      {
        context.arr.map((el =>{
            return <h1>{el.input}</h1>
        }))
      }
    </div>
  )
}

export default Data
