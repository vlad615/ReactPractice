import type { ListType } from "./layout/todoList/components/content/CardList";
import { ToDoLists, type TasksType } from "./layout/todoList/ToDoLists"
import './styles/App.css';

// import { HW1 } from './HW/1/HW1';
// import { HW2 } from './HW/2/HW2';
// import { HW3 } from './HW/3/HW3';
// import { HW4 } from './HW/4/HW4';
// import { Counter } from "./HW/Counter";


const task1 = crypto.randomUUID()
const task2 = crypto.randomUUID()

let toDoLists: ListType[] = [
    {
        id: task1,
        title: "Programing",
        filter: "all"
    },
    {
        id: task2,
        title: "To be happy",
        filter: "all"
    },
]

let tasks: TasksType =
{
    [task1]: [
        { id: crypto.randomUUID(), title: 'HTML&CSS', isDone: true },
        { id: crypto.randomUUID(), title: 'JS', isDone: true },
        { id: crypto.randomUUID(), title: 'ReactJS', isDone: false },
    ],

    [task2]: [
        { id: crypto.randomUUID(), title: 'Hello world', isDone: true },
        { id: crypto.randomUUID(), title: 'I am Happy', isDone: false },
        { id: crypto.randomUUID(), title: 'Yo', isDone: false },]

}

export function App() {

  return (
    <div className="App">
      <ToDoLists  list={toDoLists} tasks={tasks}/>

      {/* <div className="container">
        <section>
          <div className="list-wrapper">
            <HW1 />
            <HW2 />
          </div>
          <HW3 />
          <HW4 />
        </section>
      </div>
      <div className="container">
        <section>
          <Counter />
        </section>
      </div> */}
    </div>

  )
}

