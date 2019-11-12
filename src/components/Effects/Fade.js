import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'

const Fade = (props) => {
    const { hideAfterTransition, visible, duration } = props

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 0},
        entered:  { opacity: 1},
        exited:  { opacity: 0},
    }
    if(hideAfterTransition) {
        transitionStyles.entering.display = 'none'
        transitionStyles.entered.display = 'block'
        transitionStyles.exited.display = 'none'
    }

    return (
        <Transition in={visible} timeout={duration}>
            {state => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    {props.children}
                </div>
            )}
        </Transition>
    )
}

Fade.defaultProps = {
    duration: 300
}
Fade.propTypes = {
    visible: PropTypes.bool.isRequired,
    duration: PropTypes.number
}

export default Fade