import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {Slider} from "@mui/material";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
    }
) => {
    // сделать самому, можно подключать библиотеки


    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as [number, number])
    };

    function valuetext(value: number) {
        return `${value}°C`;
    }

    return (
        <>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                style={{width: '129px'}}
            />
        </>
    )
}

export default SuperDoubleRange
