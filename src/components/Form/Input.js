import React from 'react'
import { makeStyles } from '@material-ui/core'

const Input = (props) => {
    const classes = styles()

    return (
        <input className={classes.input} {...props}  />
    )
}

const styles = makeStyles(() => ({
    input: {
        display: 'block',
        marginBottom: '15px',
        borderRadius: '5px',
        height: '29px',
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        border: '1px solid #dadada',
        color: '#484848',
        padding: '0 15px',
        outline: 'none',
        fontSize: '12px',
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

export default Input