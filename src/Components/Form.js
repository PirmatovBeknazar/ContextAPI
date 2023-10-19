import React, { useContext } from 'react'
import Buttons from './UI/Buttons'
import Inputs from './UI/Inputs'
import styled from 'styled-components'
import { TodoProvaider } from '../store/TodoProvaider'
import { useState } from 'react'

const Form = () => {

  const context = useContext(TodoProvaider)
  const [valueInput, setValueInput] = useState('')

  const clickHendler=(e)=>{
    const obj = {
      input: valueInput,
      id: Math.random(),
    }
    console.log(obj);
    context.clickHendler(obj)
    setValueInput('')
    e.preventDefault()
  }

  const onChangeInput = (e) => {
    setValueInput(e.target.value)
  }

  return (
    <div>
      <Divka onSubmit={clickHendler}>
      <Inputs value={valueInput} onChange={onChangeInput} />
      <Buttons onClick={clickHendler}/>
      </Divka>
      
    </div>
  )
}

export default Form
const Divka = styled.form`
width: 500px ;
height: 200px;
border: 1px solid red;
margin: auto;
display: flex;
align-items: center;
`
