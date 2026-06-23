import { useState } from "react"
import { Button } from "../../../../components/Buttons"

type Props = {
    createList: (title: string) => void;
}

export const Form = ({createList}: Props) => {
    const [value, setValue] = useState("")

    function changeValue(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
    }

    function onClick(){
        createList(value)
        setValue("")
    }

    return (
        <form>
            <label htmlFor="listName"><input type="text" value={value} onChange={changeValue} placeholder="Название списка" /></label>
            <Button name="Add List " callBack={onClick} />
        </form>
    )
}