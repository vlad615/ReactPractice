import { useState } from "react"
import { Button } from "./Buttons"


type TaskProps = {
    id: number
    title: string
    isDone: boolean
}

export type ListProps = {
    title: string
    tasks: TaskProps[]
}


export function ToDoList({ title, tasks }: ListProps) {
    const [currentList, setCurrentList] = useState(tasks)

    const TasksItems = currentList.length ? currentList.map(task => {
        return (
            <li key={task.id} >
                <label>
                    <input type="checkbox" checked={task.isDone} onChange={()=>{changeDone(task.id)} }/>
                    {task.title}
                </label>
            </li>)
    }) : <p>List is empty</p>

    function filterList(typeFileter?: string) {
        debugger
        typeFileter === "active"
            ? setCurrentList(tasks.filter(task => !task.isDone))
            : setCurrentList(tasks.filter(task => task.isDone))
    }

    function changeDone(id: number) {
        tasks = tasks.map(task => task.id === id? {...task, isDone: !task.isDone}: task)
    }


    return (
        <div>
            <h2>{title}</h2>
            <input type="text" placeholder="New task" /><Button name="+" />
            <ul>
                {TasksItems}
            </ul>
            <Button name="All" callBack={() => { setCurrentList(tasks) }} />
            <Button name="Active" callBack={() => { filterList("active") }} />
            <Button name="Complited" callBack={() => { filterList("complited") }} />
        </div>

    )
}