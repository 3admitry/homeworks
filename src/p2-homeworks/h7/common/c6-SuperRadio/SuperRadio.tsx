import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    console.log(value);
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.value)
        // onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((o, i) => {
        return (
            <label key={name + '-' + i}>
                <input
                    type={'radio'}
                    name={o}
                    checked={value === o}
                    value={o}
                    onChange={(e)=>onChangeCallback(e)}
                    // name, checked, value, onChange
                />
                {o}
            </label>
            )// map options with key

    }) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
