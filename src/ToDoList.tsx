import { useRef, useState } from "react"
import { Button } from "./Buttons"
import { ListItem, type TaskProps } from "./ListItem"



export type ListProps = {
    id: string
    title: string
    tasks: TaskProps[]
    // updateData: (data: ListProps)=>void
}

type Props = {
    listTask: ListProps
    updateData: (data: ListProps) => void
}

export function ToDoList({ listTask, updateData }: Props) {
    const [name, setName] = useState("");
    const [currentFilter, setCurrentFilter] = useState<"active" | "complited" | "all">("all")

    let ListItems

    if (currentFilter === "active") {
        ListItems = listTask.tasks.filter(task => !task.isDone).map(task =>
            <ListItem id={task.id} title={task.title} isDone={task.isDone} changeDone={changeDone} delTask={delTask} />)
    } else if (currentFilter === "complited") {
        ListItems = listTask.tasks.filter(task => task.isDone).map(task =>
            <ListItem id={task.id} title={task.title} isDone={task.isDone} changeDone={changeDone} delTask={delTask} />)
    } else {
        ListItems = listTask.tasks.map(task =>
            <ListItem id={task.id} title={task.title} isDone={task.isDone} changeDone={changeDone} delTask={delTask} />)
    }

    function addTask() {
        if (name) {
            let newState = [...listTask.tasks, { id: crypto.randomUUID(), title: name, isDone: false }]
            setName("")
            updateData({ id: listTask.id, title: listTask.title, tasks: newState })
        }

    }

    function delTask(idTask: string) {
        let newState = listTask.tasks.filter(task => task.id !== idTask)
        console.log(newState);

        updateData({ id: listTask.id, title: listTask.title, tasks: newState })
    }

    function changeDone(idTask: string) {
        let newState = listTask.tasks.map(task => task.id === idTask ? { ...task, isDone: !task.isDone } : task)
        updateData({ id: listTask.id, title: listTask.title, tasks: newState })
    }


    return (
        <div>
            <h2>{listTask.title}</h2>
            <input value={name} type="text" placeholder="New task" onChange={(ev) => setName(ev.target.value)} />
            <Button name="+" callBack={() => addTask()} />
            <ul>
                {ListItems.length ? ListItems : <p>List is empty!</p>}
            </ul>
            <Button name="All" callBack={() => { setCurrentFilter("all") }} />
            <Button name="Active" callBack={() => { setCurrentFilter("active") }} />
            <Button name="Complited" callBack={() => { setCurrentFilter("complited") }} />
        </div>

    )
}