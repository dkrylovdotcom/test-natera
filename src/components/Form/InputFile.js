import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'

const InputFile = (props) => {
    const classes = styles()
    const { placeholder, label } = props

    const placeholderText = placeholder ? placeholder : 'Select an image'
    const placeholderClass = placeholder ?
        clsx(classes.placeholder, classes.placeholderActive) : classes.placeholder

    return (
        <div className={classes.group}>
            <span className={placeholderClass}>{placeholderText}</span>
            <input className={classes.input} type="file" {...props}  />
            <span className={classes.label}>{label}</span>
        </div>
    )
}

const styles = makeStyles(() => ({
    input: {
        cursor: 'pointer',
        display: 'block',
        height: '29px',
        position: 'relative',
        borderRadius: '5px',
        width: '100%',
        opacity: 0,
        zIndex: 2
    },
    placeholder: {
        fontSize: '12px',
        fontFamily: 'Roboto',
        color: '#aeaeae',
        marginLeft: '15px',
        display: 'flex',
        height: '29px',
        alignItems: 'center',
        zIndex: '0',
        position: 'absolute',
        cursor: 'pointer'
    },
    placeholderActive: {
        color: '#484848'
    },
    label: {
        position: 'absolute',
        right: '35px',
        top: '5px',
        textTransform: 'uppercase',
        color: '#DADADA',
        letterSpacing: '0.05em',
        cursor: 'pointer'
    },
    group: {
        position: 'relative',
        marginBottom: '15px',
        borderRadius: '5px',
        height: '29px',
        width: '100%',
        border: '1px solid #dadada',
    }
}))

InputFile.propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.any
}

export default InputFile