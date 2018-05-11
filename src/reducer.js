let initial_state = {
    num: 0,
    name: ''
}

const INCREASE_NUM = 'INCREASE_NUM';
const DECREASE_NUM = 'DECREASE_NUM';
const CHANGE_NAME = 'CHANGE_NAME';


export default function reducer(state = initial_state, action) {
    switch (action) {
        case INCREASE_NUM:
            return Object.assign({}, state, { num: ++state.num })
        case DECREASE_NUM:
            return Object.assign({}, state, { num: --state.num })
        case CHANGE_NAME:
            return Object.assign({}, state, { name: action.payload })
        default: return state;
    }
}

export function increase() {
    return {
        type: INCREASE_NUM
    }
}

export function decrease() {
    return {
        type: DECREASE_NUM
    }
}

export function action_change(val) {
    return {
        type: CHANGE_NAME,
        payload: val
    }
}
let action = action_change();