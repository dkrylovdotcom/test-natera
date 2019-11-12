import * as types from '../constants/action-types'

const loadAll = (projects) => {
    return {
        type: types.PROJECT_LOAD_ALL,
        payload: projects
    }
}

const remove = (id) => {
    return {
        type: types.PROJECT_REMOVE,
        payload: id
    }
}

export {
    loadAll,
    remove
}