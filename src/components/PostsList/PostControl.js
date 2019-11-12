import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, Grid } from '@material-ui/core'

const PostControl = (props) => {
    const classes = styles()
    const {
        id,
        status,
        publish,
        unpublish,
        remove
    } = props
    const removeBtn = clsx(classes.button, classes.red)
    const publishBtn = clsx(classes.button, classes.blue)
    const unpublishBtn = clsx(classes.button, classes.red, classes.buttonFullWidth)

    const gridPublishAndRemove = (
        <Grid container className={classes.controlContainer} justify="space-evenly">
            <div onClick={() => publish(id)} className={publishBtn}>Publish</div>
            <div onClick={() => remove(id)} className={removeBtn}>Remove</div>
        </Grid>
    )

    const gridUnpublish = (
        <Grid container className={classes.controlContainer} justify="center">
            <div onClick={() => unpublish(id)} className={unpublishBtn}>Unpublish</div>
        </Grid>
    )

    return (
        <Fragment>
            { status ? gridUnpublish : gridPublishAndRemove }
        </Fragment>
    )
}

const styles = makeStyles(() => ({
    controlContainer: {
        height: '40px',
        background: '#fff',
        zIndex: '2',
        width: '100%',
        display: 'flex',
        alignContent: 'center',
        borderBottom: '1px solid rgba(104, 131, 228, 0.2)'
    },
    button: {
        cursor: 'pointer',
        textTransform: 'uppercase',
        background: 'transparent',
        width: '100px',
        height: '20px',
        fontSize: '10px',
        fontFamily: 'Montserrat',
        borderRadius: '3px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid transparent'
    },
    buttonFullWidth: {
        width: '100%',
        maxWidth: '200px'
    },
    blue: {
        color: '#6883E4',
        borderColor: '#6883E4',
        '&:hover': {
            color: '#FFFFFF',
            backgroundColor: '#6883E4',
        }
    },
    red: {
        color: '#DF4036',
        borderColor: '#DF4036',
        '&:hover': {
            color: '#FFFFFF',
            backgroundColor: '#DF4036',
        }
    }
}))

PostControl.propTypes = {
    id: PropTypes.number.isRequired,
    status: PropTypes.bool.isRequired,
    publish: PropTypes.func.isRequired,
    unpublish: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default PostControl