import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    NotificationControl,
    NotificationOutput
} from '../components/Notification'
import * as actions from '../actions/notification'

const Notification = (props) => {
    const {
        mode,
        visible,
        message,
        subMessage,
        startNotify,
        stopNotify,
        hideIn
    } = props


    const notificationOutput = (
        <NotificationOutput
            visible={visible}
            message={message}
            subMessage={subMessage}
            stopNotify={stopNotify}
            hideIn={hideIn} />
    )

    const notificationControl = (
        <NotificationControl
            message={message}
            subMessage={subMessage}
            visible={visible}
            startNotify={startNotify}
            stopNotify={stopNotify} />
    )

    return (
        <Fragment>
            { mode === 'dashboard' ? notificationOutput : notificationControl }
        </Fragment>
    )
}

Notification.defaultProps = {
    hideIn: 8
}
Notification.propTypes = {
    mode: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    subMessage: PropTypes.string.isRequired,
    stopNotify: PropTypes.func.isRequired,
    hideIn: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
    const { notification: { message, subMessage, visible} } = state
    return {
        message,
        subMessage,
        visible
    }
}

export default connect(mapStateToProps, actions)(Notification)