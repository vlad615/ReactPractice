

type Props = {
    name: string
    callBack?: () => void
}

export function Button({name, callBack}: Props){
    return(
        <button onClick={callBack}>{name}</button>
    )
}