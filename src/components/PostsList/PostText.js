import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'

const PostText = (props) => {
    const classes = styles()
    const { mode, context: {title} } = props

    const contentClass = mode === 'adminBoard' ?
        clsx(classes.cardContent, classes.adminCardContent) : classes.cardContent

    return (
        <div className={contentClass}>
            <div className={classes.title}>
                {title}
            </div>
        </div>
    )
}

const styles = makeStyles(theme => ({
    title: {
        fontSize: '14px',
        color: '#484848',
        fontFamily: 'Roboto',
        fontWeight: '500',
        lineHeight: '16px'
    },
    cardContent: {
        height: '95px',
        margin: '27px 24px 12px 24px',
        borderBottom: '1px solid #ECECEC'
    },
    adminCardContent: {
        margin: '12px 25px 6px 25px',
        height: '85px'
    },
    [theme.breakpoints.down('xs')]: {
        cardContent: {
            height: '64px'
        }
    }
}))


const contextShape = {
    title: PropTypes.string.isRequired
}

PostText.propTypes = {
    context: PropTypes.shape(contextShape).isRequired
}

export default PostText