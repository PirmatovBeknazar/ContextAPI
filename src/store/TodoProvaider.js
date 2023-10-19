import { createContext,  useState } from "react";

 
  export const TodoProvaider = createContext()

  export const TodoComponents = (props)=>{
    const [input , setInput]= useState("")
    const [arr, setArr] = useState([])



    const inputHendler =(e)=>{
        setInput(e.target.value)
    }

    const clickHendler =(obj)=>{
        setArr((prev)=>{
            return[...prev,obj]
        })
   
    }
     
    const value = {
        arr,
        input,
        inputHendler,
        clickHendler
    }

    return(
        <TodoProvaider.Provider value={value}>{props.children}</TodoProvaider.Provider>
    )
 }