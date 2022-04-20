import React, {useState} from 'react'
import { v1 } from 'uuid'
import AlternativeGreeting from './AlternativeGreeting'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        setUsers([{_id: v1(), name: name}, ...users]) // need to fix
    }
    let allUsers = users.map((u,i)=><li key={i}>{u._id} | {u.name}</li>)

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <ul>{allUsers}</ul>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeGreeting/>
            <hr/>
        </div>
    )
}

export default HW3
