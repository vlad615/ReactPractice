import type { ListType } from "./layout/todoList/components/content/CardList";
import { ToDoLists, type TasksType } from "./layout/todoList/ToDoLists"
import s from "./styles/App.module.css";

import { HW1 } from './s2-homeworks/hw01/HW1'

import { HW1 as TS1 } from './HW/1/HW1';
import { HW2 as TS2 } from './HW/2/HW2';
import { HW3 as TS3 } from './HW/3/HW3';
import { HW4 as TS4 } from './HW/4/HW4';
import { Counter } from "./HW/Counter";


const task1 = crypto.randomUUID()
const task2 = crypto.randomUUID()

const toDoLists: ListType[] = [
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

const tasks: TasksType =
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
    <>
      <section>
        <ToDoLists list={toDoLists} tasks={tasks} />
      </section>
      
      <section>
        <div className="container">
          <div className="list-wrapper">
            <TS1 />
            <TS2 />
          </div>
          <TS3 />
          <TS4 />
        </div>
      </section>

      <section>
        <div className="container">
          <Counter />
        </div>
      </section>

      <section>
          <HW1 />
      </section>
    </>
  )
}

