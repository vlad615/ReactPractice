import { ToDoList, type ListProps } from "./ToDoList"
import './App.css';
import { HW1 } from './HW/1/HW1';
import { useState } from "react";
import { HW2 } from './HW/2/HW2';
// import { HW3 } from './HW/3/HW3';
// import { HW4 } from './HW/4/HW4';


  let tasks: ListProps[] = [
    {
      id: "1",
      title: "Programing",
      tasks: [
        { id: "1", title: 'HTML&CSS', isDone: true },
        { id: "2", title: 'JS', isDone: true },
        { id: "3", title: 'ReactJS', isDone: false },
      ],
    },
    {
      id: "2",
      title: "To be happy",
      tasks: [
        { id: "1", title: 'Hello world', isDone: true },
        { id: "2", title: 'I am Happy', isDone: false },
        { id: "3", title: 'Yo', isDone: false },
      ],
    },
    {
      id: "3",
      title: "New Task",
      tasks: [], 
    }
  ]


export function App() {
  const [currentTasks, setCurrentTasks] = useState(tasks) 
  
const updateData = (data: ListProps) => {
  console.log("update");
  
  let newtasks = tasks.map(task => task.id === data.id? {...data}: task)
  setCurrentTasks(newtasks)
  console.log(newtasks);

}



  return (
    // <div className="App">
    //   <HW1 />
    //   <HW2 />
    //   <HW3 />
    //   <HW4 />
    //  </div> 
    <section>
      {currentTasks.map(task=><ToDoList key={task.id} listTask={task} updateData={updateData}/>)}
    </section>
  )
}

