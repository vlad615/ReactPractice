import s2 from '@/app/App.module.css'
import SuperSelect from '@/commun/components/c5-SuperSelect/SuperSelect'
import { useAppDispatch, useAppSelector } from '@/commun/hooks/'
import { useEffect } from 'react'
import { changeThemeIdAC } from './bll/themeReducer'
import s from './HW12.module.css'
/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    { id: 1, value: 'light' },
    { id: 2, value: 'blue' },
    { id: 3, value: 'dark' },
]

const HW12 = () => {
    // взять ид темы из редакса
    const themeId = useAppSelector(state => state.theme.themeId)
    const dispatch = useAppDispatch()

    const change = (id: number) => { // дописать функцию
        dispatch(changeThemeIdAC(+id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'}>
            <div className="container">
                <div id={'hw12-text'} className={s2.hwTitle}>
                    Homework #12
                </div>

                <div className={s2.hw}>
                    <SuperSelect
                        id={'hw12-select-theme'}
                        className={s.select}
                        // сделать переключение тем
                        options={themes}
                        onChangeOption={change}
                    />
                </div>
            </div>

        </div>
    )
}

export default HW12
