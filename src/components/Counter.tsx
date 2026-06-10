import { useState } from "react"


export const Counter = () =>{
    const [counter, setCounter] = useState<number>(0)

    return(
        <div className="counter-wrapper">
            <span>{counter}</span>
            <button onClick={()=> {if (counter+1<=15) {setCounter(counter+1)}}}>+</button>
            <button onClick={()=> {if (counter+3<=15) {setCounter(counter+3)}}}>+3</button>
            <button onClick={()=> {setCounter(0)}}>reset</button>
        </div>
    )
}