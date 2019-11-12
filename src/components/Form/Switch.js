import React from 'react'
import PropTypes from 'prop-types'
import {
    makeStyles,
    FormGroup,
    FormControlLabel,
    Switch as SwitchUI
} from '@material-ui/core'

const Switch = (props) => {
    const classes = styles()
    const {
        checked,
        onFunc,
        offFunc,
        onText,
        offText
    } = props

    return (
        <FormGroup className={classes.switchWrap}>
            <FormControlLabel
                control={
                    <SwitchUI
                        checked={checked}
                        onChange={checked ? onFunc : offFunc} />
                }
                label={checked ? onText : offText}
            />
        </FormGroup>
    )
}

const styles = makeStyles({
    switchWrap: {
        '& .MuiSwitch-root': {
            width: '44px',
            height: 'auto',
            marginRight: '15px',
            padding: 0
        },
        '& .MuiSwitch-switchBase': {
            top: '1px',
            padding: 0
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(100%)'
        },
        '& .MuiSwitch-thumb': {
            boxShadow: 'none',
            backgroundColor: '#fff',
            width: '18px',
            height: '18px',
            position: 'relative',
            top: '1px',
            left: '3px'
        },
        '& .MuiButtonBase-root + .MuiSwitch-track': {
            backgroundColor: '#6883E4',
            opacity: 1,
            height: '22px',
            borderRadius: '16px'
        },
        '& .MuiFormControlLabel-label': {
            color: '#484848',
            fontSize: '14px',
            fontFamily: 'Roboto'
        }
    }
})

Switch.defaultProps = {
    checked: false
}

Switch.propTypes = {
    checked: PropTypes.any,
    onFunc: PropTypes.func,
    offFunc: PropTypes.func,
    onText: PropTypes.string,
    offText: PropTypes.string,
}

export default Switch