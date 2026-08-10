import s2 from '@/app/App.module.css'
import { type RootState } from '@/app/store'
import SuperButton from '@/commun/components/c2-SuperButton/SuperButton'
import { useAppDispatch } from '@/commun/hooks/useAppDispatch'
import { useAppSelector } from '@/commun/hooks/useAppSelector'
import { loadingAC } from './bll/loadingReducer'
import { Loader } from './Loader'

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
    const isLoading = useAppSelector((state: RootState) => state.loading.isLoading)
    const dispatch = useAppDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1500)
    }

    return (
        <section>
            <div id={'hw10'} className='container'>
                <div className={s2.hwTitle}>Homework #10</div>

                <div className={s2.hw}>
                    {isLoading ? (
                        <div id={'hw10-loading'}>
                            <Loader />
                        </div>
                    ) : (
                        <SuperButton
                            id={'hw10-button-start-loading'}
                            onClick={setLoading}
                        >
                            Set loading...
                        </SuperButton>
                    )}
                </div>
            </div>
        </section>

    )
}

export default HW10
