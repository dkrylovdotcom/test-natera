import * as types from '../constants/action-types'

const initialState = {
    "type": null,
    "title": null,
    "context": {},
    "visible": false
}

export default function modal(state = initialState, action) {
    switch (action.type) {
        case types.MODAL_OPEN:
            return Object.assign({}, state, {
                type: action.payload.type,
                title: action.payload.title,
                context: action.payload.context,
                visible: true
            })

        case types.MODAL_CLOSE:
            return {...state, visible: false}

        default:
            return state
    }
}