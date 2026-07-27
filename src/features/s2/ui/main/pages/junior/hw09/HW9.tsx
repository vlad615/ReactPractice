import s2 from '@/app/App.module.css'
import Clock from './Clock'

/*
* 1 - в файле Clock.tsx дописать функции stop, start, onMouseEnter, onMouseLeave
* 2 - в файле Clock.tsx из переменной date вычислить значения stringTime, stringDate, stringDay, stringMonth
* 3 - в файле Clock.tsx дизэйблить кнопки стоп / старт если таймер не запущен / запущен соответственно
* 4 - сделать стили в соответствии с дизайном
* */

const HW9 = () => {
    return (
        <section>
            <div id={'hw9'} className='container'>
                <div className={s2.hwTitle}>Homework #9</div>

                <div className={s2.hw}>
                    <Clock />
                </div>
            </div>
        </section>

    )
}

export default HW9
