import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    withStyles,
    IconButton,
    SnackbarContent
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import Fade from '../Effects/Fade'

class NotificationOutput extends Component {
    constructor() {
        super()
        this.state = {timer: null}
    }

    componentDidMount() {
        this.autoHide()
    }
    componentDidUpdate(prevProps) {
        if(prevProps.visible && !this.props.visible) {
            clearTimeout(this.state.timer)
            this.setState({timer: null})
        } else if(
            !prevProps.visible &&
            this.props.visible &&
            !this.state.timer
        ) {
            this.autoHide()
        }
    }
    componentWillUnmount() {
        clearTimeout(this.state.timer)
    }

    autoHide() {
        const { stopNotify, hideIn } = this.props
        const hideInMs = hideIn * 1000
        const timerId = setTimeout(stopNotify, hideInMs)
        this.setState({timer: timerId})
    }

    render() {
        const {
            classes,
            visible,
            message,
            subMessage,
            stopNotify
        } = this.props

        return (
            <Fade visible={visible} hideAfterTransition={true}>
                <SnackbarContent
                    className={classes.wrapper}
                    aria-describedby="client-snackbar"
                    message={
                        <span className={classes.messageWrap}>
                        <svg className={classes.typeIcon} width="29" height="38" viewBox="0 0 29 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M28.434 28.2687L25.9684 25.8031V16.2464C25.9684 10.3786 22.8338 5.46643 17.3673 4.16672V2.86701C17.3673 1.2806 16.0867 0 14.5003 0C12.9139 0 11.6333 1.2806 11.6333 2.86701V4.16672C6.14778 5.46643 3.0323 10.3595 3.0323 16.2464V25.8031L0.566668 28.2687C-0.637475 29.4728 0.203514 31.5371 1.90461 31.5371H27.0769C28.7971 31.5371 29.6381 29.4728 28.434 28.2687ZM6.85487 27.7144V16.2464C6.85487 11.5063 9.741 7.64538 14.5002 7.64538C19.2595 7.64538 22.1456 11.5063 22.1456 16.2464V27.7144H6.85487ZM18.3229 33.4484C18.3229 35.5509 16.6027 37.2711 14.5002 37.2711C12.3787 37.2711 10.6776 35.5509 10.6776 33.4484H18.3229Z" fill="white"/>
                        </svg>

                        <div>
                            <div className={classes.message}>{message}</div>
                            <div className={classes.subMessage}>{subMessage}</div>
                        </div>
                    </span>
                    }
                    action={[
                        <IconButton
                            className={classes.closeIcon}
                            key="close"
                            aria-label="close"
                            onClick={stopNotify}
                            color="inherit">

                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </Fade>
        )
    }
}

const styles = theme => ({
    wrapper: {
        backgroundColor: "#6883e4",
        marginBottom: '24px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.15)',
        borderRadius: '5px',
        height: '88px',
        flexWrap: 'unset'
    },
    typeIcon: {
        fontSize: '20px',
        margin: '0 29px 0 15px'
    },
    closeIcon: {
        marginRight: '15px',
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    messageWrap: {
        display: 'flex',
        alignItems: 'center',
    },
    message: {
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: 'Montserrat'
    },
    subMessage: {
        fontSize: '14px',
        fontFamily: 'Montserrat'
    },
    [theme.breakpoints.down('xs')]: {
        typeIcon: {
            margin: '0 15px 0 10px',
            width: '35px'
        },
        closeIcon: {
            paddingLeft: '0'
        },
        message: {
            fontSize: '14px',
            lineHeight: '1em',
            marginBottom: '5px'
        },
        subMessage: {
            fontSize: '12px',
            lineHeight: '1em'
        }
    }
})

Notification.defaultProps = {
    hideIn: 8
}
Notification.propTypes = {
    visible: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    subMessage: PropTypes.string.isRequired,
    startNotify: PropTypes.func.isRequired,
    stopNotify: PropTypes.func.isRequired,
    hideIn: PropTypes.number.isRequired
}

export default withStyles(styles)(NotificationOutput)