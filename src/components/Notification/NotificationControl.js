import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import { Switch } from '../Form'

const NotificationControl = (props) => {
    const classes = styles()
    const {
        visible,
        message,
        subMessage,
        startNotify,
        stopNotify
    } = props

    return (
        <Fragment>
            <div className={classes.title}>
                Notifications
            </div>
            <div className={classes.notificationSettings}>
                <Switch
                    checked={visible}
                    onFunc={stopNotify}
                    offFunc={() => startNotify(message, subMessage)}
                    onText="Show all notifications"
                    offText="Hide all notifications"
                />
            </div>
        </Fragment>
    )
}

const styles = makeStyles(() => ({
    title: {
        color: '#757575',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        fontSize: '20px',
        margin: '0 0 10px 35px'
    },
    notificationSettings: {
        marginLeft: '45px'
    }
}))

NotificationControl.propTypes = {
    visible: PropTypes.bool.isRequired,
    startNotify: PropTypes.func.isRequired,
    stopNotify: PropTypes.func.isRequired
}

export default NotificationControl