const initState = {
    loading: false
}

const SET_LOADING = 'SET_LOADING';

type initStateType = typeof initState;

export type actionType = {
    type: 'SET_LOADING'
    loading: boolean
}

export const loadingReducer = (state:initStateType = initState, action: actionType): initStateType => {
    switch (action.type) {
        case 'SET_LOADING': {
            return {...state, loading:action.loading}
        }
        default: return state
    }
}

export const loadingAC = (loading:boolean): actionType => ({type: SET_LOADING, loading}) // fix any