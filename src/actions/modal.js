import * as types from '../constants/action-types'

const modalShow = (data) => {
    return {
        type: types.MODAL_OPEN,
        payload: data
    }
}
const modalClose = () => ({type: types.MODAL_CLOSE})

export {
    modalShow,
    modalClose
}