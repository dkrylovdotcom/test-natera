import * as types from '../constants/action-types'

export default function projects(state = [], action) {
    switch (action.type) {
        case types.PROJECT_LOAD_ALL:
            return action.payload

        case types.PROJECT_REMOVE:
            const id = action.payload
            let projects = []

            state.forEach((item) => {
                if(item.id !== id) {
                    projects.push(item)
                }
            })
            return projects

        default:
            return state
    }
}