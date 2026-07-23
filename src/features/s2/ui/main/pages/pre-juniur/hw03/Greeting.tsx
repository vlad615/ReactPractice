import React, { type ChangeEvent, type KeyboardEvent } from 'react'
import s from './Greeting.module.css'
import type { UserType } from './HW3'

type GreetingPropsType = {
    name: UserType['name'] // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onBlur: () => void // need to fix any
    onEnter: (e: KeyboardEvent) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    lastUserName?: string // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, onEnter, onBlur, error, totalUsers, lastUserName }, // деструктуризация пропсов
) => {
    const inputClass = s.input + (error.length ? ' ' + s.errorInput : '') // need to fix with (?:)

    return (
        <div id={'hw3-form'} className={s.greetingForm}>
            <p className={s.text}>
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>{totalUsers}</span>
            </p>

            <div className={s.inputAndButtonContainer}>
                <input
                    id={'hw3-input'}
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    onKeyDown={onEnter}
                    onBlur={onBlur}
                />
                <button id={'hw3-button'} onClick={addUser} className={s.button} disabled={!name.trim()}>
                    add
                </button>
                <p id={'hw3-error'} className={s.error}>
                    {error}
                </p>
            </div>

            {lastUserName && (
                <p className={s.greeting}>
                    Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
                </p>
            )}
        </div>
    )
}

export default Greeting
