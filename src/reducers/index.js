import { combineReducers } from 'redux'
import app from './app'
import statistic from './statistic'
import posts from './posts'
import notification from './notification'
import projects from './projects'
import modal from './modal'

export default combineReducers({
    app,
    statistic,
    posts,
    notification,
    projects,
    modal
})
