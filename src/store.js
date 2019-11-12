import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

const logger = ({ getState }) => {
    return next => action => {
        console.log('Will dispatch', action)
        const returnValue = next(action)
        console.log('State after dispatch', getState())
        return returnValue
    }
}

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            logger
        )
    )
}