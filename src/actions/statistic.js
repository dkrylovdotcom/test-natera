import * as types from '../constants/action-types'

const loadAll = (statistic) => {
    return {
        type: types.STATISTIC_LOAD_ALL,
        payload: statistic
    }
}

export {
    loadAll
}