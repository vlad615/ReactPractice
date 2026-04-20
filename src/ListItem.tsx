import { Button } from "./Buttons"

export type TaskProps = {
    id: string
    title: string
    isDone: boolean
}

type Props = TaskProps & {
    id: string
    title: string
    isDone: boolean
    changeDone: (id: TaskProps["id"])=>void
    delTask: (id: TaskProps["id"])=>void
}



export const ListItem = (props: Props) => {

    
    return (
        <li key={props.id} >
            <label>
                <input type="checkbox" checked={props.isDone} onChange={() => { props.changeDone(props.id) }} />
                {props.title}
            </label><Button name="x" callBack={() => props.delTask(props.id)} />
        </li>)
}