import { useState } from "react";
import { Button } from "../../../../components/Buttons";


type Filter = "all" | "complited" | "active"

export type ListType = {
    id: string
    title: string
    filter: Filter
}

export type TaskProps = {
    id: string
    title: string
    isDone: boolean
}


type Props = ListType & {
    tasks: TaskProps[],
    // createList: ()=>void;
    updateList: (data: ListType) => void;
    delList: (idList: ListType["id"]) => void;
    createTask: (idList: ListType["id"], title: TaskProps["title"]) => void;
    changeDone: (idList: ListType["id"], id: TaskProps["id"]) => void;
    delTask: (idList: ListType["id"], id: TaskProps["id"]) => void;

}


export const CardList = ({ id, title, filter, tasks, updateList, delList, createTask, changeDone, delTask }: Props) => {
    const [value, setValue] = useState("")
    let filteredTasks: Props["tasks"] = [];

    function changeValue(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
    }

    function newTask() {
        if (value.trim().length !== 0) {
            createTask(id, value)
        }
        setValue("")
    }

    function ListItems() {
        if (filter === "active") {
            filteredTasks = tasks.filter(t => !t.isDone)
            if (!filteredTasks.length){
                return <span>All tasks is done!)</span>
            }
        } else if (filter === "complited") {
           filteredTasks = tasks.filter(t => t.isDone)
           if (!filteredTasks.length){
                return <span>U have complite no tasks, yet!</span>
            }
        } 

        const item = (data: TaskProps) => <li key={data.id}>
            <label>
                <input type="checkbox" checked={data.isDone} onChange={() => changeDone(id, data.id)} />
                {data.title}
            </label>
            <Button name="x" callBack={() => delTask(id, data.id)} />
        </li>

        return filteredTasks.length ? filteredTasks.map(t => item(t)) : tasks.map(t => item(t))
    }

    return (
        <div className="wrapper">
            <Button name="x" callBack={() => delList(id)} />
            <h2>{title}</h2><br />
            <span className="counter">{tasks.length} tasks</span><br />
            <input type="text" value={value} onChange={changeValue} /><button onClick={newTask}>+</button>
            <ul>
                {ListItems()}
            </ul>
            <Button name="All" callBack={() => updateList({ id, title, filter: "all" })} />
            <Button name="Active" callBack={() => updateList({ id, title, filter: "active" })} />
            <Button name="Complited" callBack={() => updateList({ id, title, filter: "complited" })} />
        </div>
    )
}