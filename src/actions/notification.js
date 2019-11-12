import * as types from '../constants/action-types'

const startNotify = (message, subMessage) => {
    return {
        type: types.NOTIFY_SHOW,
        payload: {
            message,
            subMessage
        }
    }
}

const stopNotify = () => {
    return {
        type: types.NOTIFY_HIDE
    }
}

export {
    startNotify,
    stopNotify
}