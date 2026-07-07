import React, { type ChangeEvent, type KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { type UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: UserType["name"]) => void // need to fix any
}

export const pureAddUser = (name: UserType["name"],
    setError: (er: string) => void,
    setName: (name: string) => void,
    addUserCallback: GreetingContainerPropsType["addUserCallback"]) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (name.trim().length === 0) {
        setError("Ошибка! Введите имя!")
    } else {
        setName("")
        addUserCallback(name)
    }
}

export const pureOnBlur = (name: UserType["name"], setError: (er: string) => void) => { // если имя пустое - показать ошибку
    if (name.trim().length === 0) {
        setError("Ошибка! Введите имя!")
    }
}

export const pureOnEnter = (e: KeyboardEvent, addUser: ()=>void) => { // если нажата кнопка Enter - добавить
    if (e.key === "Enter"){
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<UserType["name"]>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        
        setName(e.target.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users.at(-1)?.name || ""// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
