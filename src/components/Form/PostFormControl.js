import React  from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import { Switch } from './index'

const PostFormControl = (props) => {
    const classes = styles()
    const {
        status,
        onStatusChange,
        modalClose,
        onPublish
    } = props

    return (
        <div className={classes.wrap}>
            <Switch
                checked={status}
                onFunc={onStatusChange}
                offFunc={onStatusChange}
                onText="Instant publish"
                offText="No publish"
            />

            <div>
                <span className={classes.cancelBtn} onClick={modalClose}>Cancel</span>
                <div className={classes.button} onClick={onPublish}>Publish</div>
            </div>
        </div>
    )
}

const styles = makeStyles(() => ({
    wrap: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-between',
        padding: '30px 0 15px 10px',
        borderTop: '1px solid #ECECEC'
    },
    cancelBtn: {
        cursor: 'pointer',
        color: '#757575',
        fontSize: '10px',
        fontFamily: 'Montserrat',
        textDecoration: 'underline',
        textTransform: 'uppercase',
        '&::after': {
            content: '"or"',
            display: 'inline-block',
            margin: '0 10px',
            textTransform: 'lowercase'
        }
    },
    button: {
        cursor: 'pointer',
        textTransform: 'uppercase',
        background: 'transparent',
        width: '100px',
        height: '32px',
        fontSize: '12px',
        fontFamily: 'Montserrat',
        borderRadius: '5px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
        backgroundColor: '#6883E4'
    }
}))

PostFormControl.defaultProps = {
    status: true
}

PostFormControl.propTypes = {
    status: PropTypes.bool,
    onStatusChange: PropTypes.func,
    onPublish: PropTypes.func,
    modalClose: PropTypes.func
}

export default PostFormControl