export const getAll = () => {
    return require('../data/posts.json')
}

export const getOne = (id) => {
    const posts = require('../data/get_one_post.json')
    let post = null
    posts.forEach(item => {
        if(item.id === id) {
            post = item
        }
    })
    if(!post) {
        alert('Error: Post not found')
    }
    return post
}

export const getAuthors = () => {
    return require('../data/authors.json')
}