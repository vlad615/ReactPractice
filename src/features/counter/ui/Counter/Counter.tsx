import { useAppSelector } from '@/commun/hooks/useAppSelector'
import { selectCounter } from '../../model/counter-selector'
import { useAppDispatch } from '@/commun/hooks/useAppDispatch'
import { addToAC, resetCounterAC } from '../../model/counter-reducer'
import s from './Counter.module.css'

export const Counter = () => {
    const counter = useAppSelector(selectCounter)
    const dispatch = useAppDispatch()

    function addValue(num: number) {
        if (counter + num <= 15) {
            dispatch(addToAC({ num }))
        }
    }

    return (
        <section>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.counterWrapper}>
                        <div className={s.numberWrapper}>{counter}</div>
                        <div className={s.btnWrapper}>
                            <button onClick={() => addValue(1)}>+1</button>
                            <button onClick={() => addValue(3)}>+3</button>
                            <button onClick={() => dispatch(resetCounterAC())}>reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
