import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'

const PostImage = (props) => {
    const classes = styles()
    const { mode, context: {title, image} } = props

    const contextWrap = mode === 'adminBoard' ?
        clsx(classes.contextWrap, classes.adminContextWrap) : classes.contextWrap
    const imageClass = mode === 'adminBoard' ?
        clsx(classes.image, classes.adminImage) : classes.image


    return (
        <div className={contextWrap}>
            <div
                className={imageClass}
                style={{backgroundImage: "url("+image+")"}} />

            <div className={classes.title}>
                {title}
            </div>
        </div>
    )
}

const styles = makeStyles(theme => ({
    contextWrap: {
        position: 'relative',
        height: '115px',
        marginBottom: '20px'
    },
    adminContextWrap: {
        height: '80px'
    },
    title: {
        position: 'absolute',
        bottom: '3px',
        left: '25px',
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#fff',
        textShadow: '0px 1px 15px rgba(0, 0, 0, 0.5)'
    },
    image: {
        height: '115px',
        backgroundSize: 'cover'
    },
    adminImage: {
        height: '95px'
    },
    [theme.breakpoints.down('xs')]: {
        contextWrap: {
            height: '98px',
            marginBottom: '12px'
        },
        title: {
            bottom: '6px'
        },
        image: {
            height: '98px'
        }
    }
}))


const contextShape = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

PostImage.propTypes = {
    context: PropTypes.shape(contextShape).isRequired
}

export default PostImage