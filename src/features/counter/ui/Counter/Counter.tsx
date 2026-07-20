import { useAppSelector } from "@/commun/hooks/useAppSelector"
import { selectCounter } from "../../model/counter-selector"
import { useAppDispatch } from "@/commun/hooks/useAppDispatch"
import { addToAC, resetCounterAC } from "../../model/counter-reducer"


export const Counter = () => {
    const counter = useAppSelector(selectCounter)
    const dispatch = useAppDispatch()

    function addValue(num: number) {
        dispatch(addToAC({ num }))
    }
    
    return (
        <section>
            <div className="container">
                <span>{counter}</span>
                <button onClick={() => addValue(1)}>+1</button>
                <button onClick={() => addValue(3)}>+3</button>
                <button onClick={() => dispatch(resetCounterAC())}>reset</button>
            </div>
        </section>

    )
}