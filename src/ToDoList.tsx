// import { useRef, useState } from "react"
// import { Button } from "./Buttons"


// type TaskProps = {
//     id: string
//     title: string
//     isDone: boolean
// }

// export type ListProps = {
//     id: string
//     title: string
//     tasks: TaskProps[]
//     // updateData: (data: ListProps)=>void
// }

// type Props = {
//     listTask: ListProps
//     updateData: (data: ListProps) => void
// }

// export function ToDoList({ listTask, updateData }: Props) {
//     const [currentList, setCurrentList] = useState(listTask.tasks)
//     const [name, setName] = useState("");
//     const [currentFilter, setCurrentFilter] = useState("all")

//     const TasksItems = currentList.length ? currentList.map(task => {
//         return (
//             <li key={task.id} >
//                 <label>
//                     <input type="checkbox" checked={task.isDone} onChange={() => { changeDone(task.id) }} />
//                     {task.title}
//                 </label><Button name="x" callBack={() => delTask(task.id)} />
//             </li>)
//     }) : <p>List is empty</p>

//     function filterList(typeFileter?: "active" | "complited") {
//         typeFileter === "active"
//             ? setCurrentList(listTask.tasks.filter(task => !task.isDone))
//             : setCurrentList(listTask.tasks.filter(task => task.isDone))
//     }

//     function addTask() {
//         if (name) {
//             let newState = [...listTask.tasks, { id: crypto.randomUUID(), title: name, isDone: false }]
//             setCurrentList(newState)
//             setName("")
//             console.log(name);
            

//             console.log(newState);

//             updateData({ id: listTask.id, title: listTask.title, tasks: newState })
//         }

//     }

//     function delTask(idTask: string) {
//         let newState = listTask.tasks.filter(task => task.id !== idTask)
//         setCurrentList(newState)
//         console.log(newState);

//         updateData({ id: listTask.id, title: listTask.title, tasks: newState })
//     }

//     function changeDone(idTask: string) {
//         let newState = listTask.tasks.map(task => task.id === idTask ? { ...task, isDone: !task.isDone } : task)
//         setCurrentList(newState)
//         console.log(newState);

//         updateData({ id: listTask.id, title: listTask.title, tasks: newState })
//     }


//     return (
//         <div>
//             <h2>{listTask.title}</h2>
//             <input required={true} type="text" placeholder="New task" onChange={(ev)=>setName(ev.target.value)} /><Button name="+" callBack={() => addTask()} />
//             <ul>
//                 {TasksItems}
//             </ul>
//             <Button name="All" callBack={() => { setCurrentList(listTask.tasks) }} />
//             <Button name="Active" callBack={() => { filterList("active") }} />
//             <Button name="Complited" callBack={() => { filterList("complited") }} />
//         </div>

//     )
// }