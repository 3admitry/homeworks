import React, { ChangeEvent,KeyboardEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void
    onclickInputHandler: (e: KeyboardEvent<HTMLInputElement>)=>void
    addUser: ()=>void
    error: boolean
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onclickInputHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error:''
    const errorTooltip = {color: 'red'}


    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={onclickInputHandler} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div style={errorTooltip}> {error && 'Enter your name'}</div>
        </div>
    )
}

export default Greeting
