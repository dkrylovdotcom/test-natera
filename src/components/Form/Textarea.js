import React from 'react'
import { makeStyles } from '@material-ui/core'

const Textarea = (props) => {
    const classes = styles()

    return (
        <textarea className={classes.textarea} {...props} />
    )
}

const styles = makeStyles(() => ({
    textarea: {
        display: 'block',
        borderRadius: '5px',
        width: '100%',
        height: '115px',
        position: 'relative',
        backgroundColor: '#ffffff',
        border: '1px solid #dadada',
        fontSize: '12px',
        color: '#484848',
        padding: '10px 12px',
        resize: 'none',
        outline: 'none',
        fontFamily: 'Roboto',
        '&::webkit-input-placeholder': {
            color: '#AEAEAE'
        },
        '&::-moz-placeholder': {
            color: '#AEAEAE'
        },
        '&::moz-placeholder': {
            color: '#AEAEAE'
        },
        '&::-ms-input-placeholder': {
            color: '#AEAEAE'
        }
    }
}))

export default Textarea