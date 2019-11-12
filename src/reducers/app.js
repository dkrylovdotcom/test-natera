import * as types from '../constants/action-types'

const initialState = {
    mode: "dashboard"
}

export default function app(state = initialState, action) {
    switch (action.type) {
        case types.APP_CHANGE_MODE:
            const mode = action.payload
            return {...state, mode}

        default:
            return state
    }
}