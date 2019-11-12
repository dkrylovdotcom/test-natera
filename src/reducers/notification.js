import * as types from '../constants/action-types'

const initialState = {
    "visible": false,
    "message": "",
    "subMessage": ""
}

export default function notification(state = initialState, action) {
    switch (action.type) {
        case types.NOTIFY_SHOW:
            const { message, subMessage } = action.payload

            return Object.assign({}, state, {
                visible: true,
                message,
                subMessage
            })

        case types.NOTIFY_HIDE:
            return {...state, visible: false}

        default:
            return state
    }
}