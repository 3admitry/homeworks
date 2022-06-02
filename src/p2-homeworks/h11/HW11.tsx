import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRangeHandler = (value:number|[number,number]) => {
        if(Array.isArray(value)){
            setValue1(value[0]);
            setValue2(value[1]);
        }else{
            setValue1(value);
        }
    }

    return (
        <div>
            <hr/>
            homeworks 11


            {/*should work (должно работать)*/}
            <div>
                <span style={{width:'30px',display: "inline-block"}}>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    onChangeRange={onChangeRangeHandler}
                    value={value1}
                />
            </div>

            <div>
                <span style={{width:'30px',display: "inline-block"}}>{value1}</span>
                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                    onChangeRange={onChangeRangeHandler}
                    value={[value1,value2]}
                />
                <span style={{width:'30px',display: "inline-block"}}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
