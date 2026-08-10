import s2 from '@/app/App.module.css'
import { restoreState } from '@/commun/localStorage/localStorage'
import { useState } from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import s from './HW11.module.css'

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */
const minDistance = 10;

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

    const change = (_event: Event, value: unknown) => {
        // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
        if (Array.isArray(value)) {
            if (value[1] - value[0] >= minDistance) {
                setValue1(value[0])
                setValue2(value[1])
            }
        } else if (typeof value === 'number') {
            if (value2 - value >= minDistance) {
                setValue1(value);
            }
        }
    }

    return (
        <section>
            <div id={'hw11'} className='container'>
                <div className={s2.hwTitle}>Homework #11</div>

                <div className={s2.hw}>
                    <div className={s.container}>
                        <div className={s.wrapper}>
                            <span id={'hw11-value'} className={s.number}>{value1}</span>
                            <SuperRange
                                id={'hw11-single-slider'}
                                value={value1}
                                onChange={(event, value) => change(event, value)}
                            // сделать так чтоб value1 изменялось // пишет студент

                            />
                        </div>
                        <div className={s.wrapper}>
                            <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                            <SuperRange
                                id={'hw11-double-slider'}
                                value={[value1, value2]}
                                // сделать так чтоб value1/2 изменялось // пишет студент
                                onChange={(event, value) => change(event, value)}

                            />
                            <span id={'hw11-value-2'} className={s.number}>{value2}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HW11
