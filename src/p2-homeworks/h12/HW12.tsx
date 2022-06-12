import React from "react";
import s from "./HW12.module.css";
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {AppStoreType} from '../h10/bll/store';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeC} from './bll/themeReducer';

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state=>state.theme.value);
    const dispatch = useDispatch();

    const onChangeCallback = (value:string) => {
        dispatch(changeThemeC(value));
    }
    useDispatch()
    return (

        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <div>
                <SuperSelect
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                />
            </div>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
