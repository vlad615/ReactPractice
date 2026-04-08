import { ToDoList, type ListProps } from "./ToDoList"
import "./App.css"

export function App() {

  const tasks1: ListProps = {
    title: "Programing",
    tasks: [
      { id: 1, title: 'HTML&CSS', isDone: true },
      { id: 2, title: 'JS', isDone: true },
      { id: 3, title: 'ReactJS', isDone: false },
    ]
  }

  const tasks2: ListProps = {
    title: "To be happy",
    tasks: [
      { id: 1, title: 'Hello world', isDone: true },
      { id: 2, title: 'I am Happy', isDone: false },
      { id: 3, title: 'Yo', isDone: false },
    ]
  }

  const tasks3: ListProps = {
    title: "New Task",
    tasks: [
    ]
  }

  return (
    <section>
      <ToDoList title={tasks1.title} tasks={tasks1.tasks} />
      <ToDoList title={tasks2.title} tasks={tasks2.tasks} />
      <ToDoList title={tasks3.title} tasks={tasks3.tasks} />
    </section>
  )
}

