import * as types from '../constants/action-types'

const changeMode = (mode) => {
    return {
        type: types.APP_CHANGE_MODE,
        payload: mode
    }
}

export {
    changeMode
}