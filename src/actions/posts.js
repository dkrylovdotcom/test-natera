import * as types from '../constants/action-types'

const loadAll = (posts) => {
    return {
        type: types.POSTS_LOAD_ALL,
        payload: posts
    }
}

const addPost = (
    type,
    title,
    text,
    image,
    author,
    status,
    createTime
) => {
    const context = {title, text, image}

    return {
        type: types.POST_ADD,
        payload: {
            type,
            status,
            context,
            author,
            createTime
        }
    }
}

const publish = (id) => {
    return {
        type: types.POST_PUBLISH,
        payload: id
    }
}

const unpublish = (id) => {
    return {
        type: types.POST_UNPUBLISH,
        payload: id
    }
}

const remove = (id) => {
    return {
        type: types.POST_REMOVE,
        payload: id
    }
}

export {
    loadAll,
    addPost,
    publish,
    unpublish,
    remove
}