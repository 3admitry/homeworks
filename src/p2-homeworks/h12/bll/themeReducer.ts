const initState = {
    value: 'some'
};

const SET_THEME = 'SET_THEME';

export type initStateType = typeof initState;
type actionType = {
    type: 'SET_THEME',
    value: string
}


export const themeReducer = (state: initStateType = initState, action: actionType): initStateType => {
    switch (action.type) {
        case SET_THEME: {
            return {
                ...state,
                value: action.value
            };
        }
        default:
            return state;
    }
};

export const changeThemeC = (value: string): actionType => ({type: SET_THEME, value});