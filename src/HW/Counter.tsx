import { useState } from "react"


export const Counter = () => {
    const [counter, setCounter] = useState<number>(0)

    function addValue(num: number) {
        if (counter + num <= 15) {
            setCounter(counter + num)
        }
    }

    return (
        <section>
            <div className="container">
                <span>{counter}</span>
                <button onClick={() => addValue(1)}>+1</button>
                <button onClick={() => addValue(3)}>+3</button>
                <button onClick={() => setCounter(0)}>reset</button>
            </div>
        </section>

    )
}