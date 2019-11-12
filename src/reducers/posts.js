import * as types from '../constants/action-types'

export default function posts(state = [], action) {
    switch (action.type) {
        case types.POSTS_LOAD_ALL:
            return action.payload

        case types.POST_ADD:
            let id = 1
            state.forEach((item) => {
                if(item.id > id) id = item.id + 1
            })

            const post = {id, ...action.payload}
            return [post, ...state]

        case types.POST_PUBLISH:
            return Object.assign([], state, state.map((item) => {
                if(item.id === action.payload) {
                    item.status = true
                }
                return item
            }))

        case types.POST_UNPUBLISH:
            return Object.assign([], state, state.map((item) => {
                if(item.id === action.payload) {
                    item.status = false
                }
                return item
            }))

        case types.POST_REMOVE:
            let posts = []
            state.forEach((item) => {
                if(item.id !== action.payload) {
                    posts.push(item)
                }
            })
            return posts

        default:
            return state
    }
}