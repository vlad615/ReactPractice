import { useState } from 'react'
import s2 from '@/app/App.module.css'
import SuperButton from '@/commun/components/c2-SuperButton/SuperButton'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import s from './HW6.module.css'
import { restoreState, saveState } from '@/commun/localStorage/localStorage'

/*
 * 1 - в файле SuperEditableSpan.tsx дописать логику функций onEnterCallback, onBlurCallback, onDoubleClickCallBack
 * 2 - дописать логику функции restore
 * 3 - сделать стили в соответствии с дизайном
 */

const HW6 = () => {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('hw6-editable-span-value', value)
    }
    const restore = () => {
        // делают студенты         
        const restored = restoreState<string>('hw6-editable-span-value', value)
        setValue(restored)
    }

    return (
        <section>
            <div id={'hw6'} className='container'>
                <div className={s2.hwTitle}>Homework #6</div>

                {/*демонстрация возможностей компоненты:*/}
                <div className={s2.hw}>
                    <div className={s.editableSpanContainer}>
                        <SuperEditableSpan
                            id={'hw6-spanable-input'}
                            value={value}
                            onChangeText={setValue}
                            spanProps={{
                                id: 'hw6-editable-span',
                                defaultText: 'enter text...',
                            }}
                        />
                    </div>

                    <div className={s.buttonsContainer}>
                        <SuperButton id={'hw6-save'} onClick={save}>
                            Save to ls
                        </SuperButton>
                        <SuperButton
                            id={'hw6-restore'}
                            onClick={restore}
                            className={'secondary'}
                        >
                            Get from ls
                        </SuperButton>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HW6
