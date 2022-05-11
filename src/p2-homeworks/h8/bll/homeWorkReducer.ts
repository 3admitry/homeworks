import {UserType} from '../HW8';

export type ActionType = { type: 'sort', payload: 'up' | 'down' } | { type: 'check', payload: number }


export const homeWorkReducer = (state: UserType, action: ActionType): UserType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let newState = [...state];
            newState.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
            return action.payload === 'up' ? newState : newState.reverse();
        }
        case 'check': {
            return state.filter(p => action.payload ? p.age >= action.payload : p)
        }
        default:
            return state
    }
}