

type Props = {
    name: string
    callBack?: () => void
}

export function Button({name, callBack}: Props){
    return(
        <button type="button" onClick={callBack}>{name}</button>
    )
}