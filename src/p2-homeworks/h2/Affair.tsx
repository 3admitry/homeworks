import React from 'react'
import {AffairElementType, AffairType} from './HW2'
import m from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairElementType
    deleteAffairCallback: (value: number) => void
}

function Affair(props: AffairPropsType) {
    let idButton = props.affair._id
    let piority = props.affair.priority;

    const deleteCallback = () => {
        props.deleteAffairCallback(idButton)
    }// need to fix

    return (
        <div className={m.affairbox}>
            <span className={m.name}>{props.affair.name}</span>
            <span className={m.priority+' '+m[piority]}>{props.affair.priority}</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
