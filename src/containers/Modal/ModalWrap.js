import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import { PostText, PostImage } from '../../components/ModalWrap'
import { Fade, Slide } from '../../components/Effects'
import PostForm from './PostForm'
import * as actions from '../../actions/modal'

const ModalWrap = (props) => {
    const classes = useStyles()
    const {
        type,
        context,
        visible,
        modalClose
    } = props


    const ContextComponent = modalTypes[type]
    const ContextTransition = modalTypesTransitions[type]

    const modalWrapClass = visible ? clsx(classes.root, classes.overflowVisible) : classes.root

    return (
        <div className={modalWrapClass}>
            <ContextTransition visible={visible}>
                <div className={classes.inner}>
                    <div className={classes.close} onClick={modalClose}>
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6672 1.12287C14.4547 0.909843 14.1661 0.790124 13.8652 0.790124C13.5643 0.790124 13.2757 0.909843 13.0631 1.12287L7.5 6.67464L1.93686 1.1115C1.72431 0.898467 1.43574 0.778748 1.13481 0.778748C0.833882 0.778748 0.545315 0.898467 0.332765 1.1115C-0.110922 1.55518 -0.110922 2.27191 0.332765 2.71559L5.8959 8.27874L0.332765 13.8419C-0.110922 14.2856 -0.110922 15.0023 0.332765 15.446C0.776451 15.8897 1.49317 15.8897 1.93686 15.446L7.5 9.88284L13.0631 15.446C13.5068 15.8897 14.2235 15.8897 14.6672 15.446C15.1109 15.0023 15.1109 14.2856 14.6672 13.8419L9.1041 8.27874L14.6672 2.71559C15.0995 2.28328 15.0995 1.55518 14.6672 1.12287Z" fill="#D2D2D2"/>
                        </svg>
                    </div>

                    <ContextComponent
                        context={context}
                        modalClose={modalClose} />
                </div>
            </ContextTransition>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        background: 'rgba(0,0,0,0.4)',
        position: 'fixed',
        zIndex: '-1',
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        opacity: 0
    },
    overflowVisible: {
        opacity: 1,
        zIndex: '999'
    },
    inner: {
        backgroundColor: '#ffffff',
        width: '700px',
        position: 'relative',
        outline: 'none'
    },
    close: {
        cursor: 'pointer',
        position: 'absolute',
        right: '40px',
        top: '25px'
    },
    [theme.breakpoints.down('xs')]: {
        root: {
            display: 'block',
            overflow: 'scroll',
            background: '#fff'
        },
        inner: {
            width: '100%'
        }
    }
}))

const modalTypes = {
    null: () => <div />,
    'PostText': PostText,
    'PostImage': PostImage,
    'NewPost': PostForm
}
const modalTypesTransitions = {
    null: () => <div />,
    'PostText': Slide,
    'PostImage': Slide,
    'NewPost': Fade
}

ModalWrap.propTypes = {
    type: PropTypes.string,
    context: PropTypes.object,
    visible: PropTypes.bool.isRequired,
    modalClose: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
    const { modal: {type, title, context, visible} } = state
    return {
        type,
        title,
        context,
        visible
    }
}

export default connect(mapStateToProps, actions)(ModalWrap)