import React from 'react'
import PropTypes from 'prop-types'
import {
    makeStyles,
    withStyles,
    Select,
    MenuItem,
    InputBase
} from '@material-ui/core'

const Dropdown = (props) => {
    const classes = styles()
    const {
        label,
        value,
        handleChange,
        elements
    } = props

    return (
        <div className={classes.wrap}>
            {!value ? <div className={classes.label}>{label}</div> : null }
            <Select
                value={value ? value : ''}
                onChange={handleChange}
                IconComponent={() => (
                    <svg className={classes.icon} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9047 10.1514L7.3541 6.60078C7.90508 5.88848 8.20312 5.01758 8.20312 4.10156C8.20312 3.00508 7.7752 1.97695 7.00137 1.20176C6.22754 0.426562 5.19668 0 4.10156 0C3.00645 0 1.97559 0.42793 1.20176 1.20176C0.426562 1.97559 0 3.00508 0 4.10156C0 5.19668 0.42793 6.22754 1.20176 7.00137C1.97559 7.77656 3.00508 8.20312 4.10156 8.20312C5.01758 8.20312 5.88711 7.90508 6.59941 7.35547L10.15 10.9047C10.1604 10.9151 10.1728 10.9234 10.1864 10.929C10.2 10.9346 10.2146 10.9375 10.2293 10.9375C10.244 10.9375 10.2586 10.9346 10.2722 10.929C10.2858 10.9234 10.2982 10.9151 10.3086 10.9047L10.9047 10.31C10.9151 10.2995 10.9234 10.2872 10.929 10.2736C10.9346 10.26 10.9375 10.2454 10.9375 10.2307C10.9375 10.2159 10.9346 10.2014 10.929 10.1877C10.9234 10.1741 10.9151 10.1618 10.9047 10.1514ZM6.26719 6.26719C5.6875 6.84551 4.91914 7.16406 4.10156 7.16406C3.28398 7.16406 2.51562 6.84551 1.93594 6.26719C1.35762 5.6875 1.03906 4.91914 1.03906 4.10156C1.03906 3.28398 1.35762 2.51426 1.93594 1.93594C2.51562 1.35762 3.28398 1.03906 4.10156 1.03906C4.91914 1.03906 5.68887 1.35625 6.26719 1.93594C6.84551 2.51562 7.16406 3.28398 7.16406 4.10156C7.16406 4.91914 6.84551 5.68887 6.26719 6.26719Z" fill="#8C8C8C"/>
                    </svg>
                )}
                input={<InputField />}>

                {elements.map(({ id, name }) => {
                    return <MenuItem key={id} value={id}>{name}</MenuItem>
                })}
            </Select>
        </div>
    )
}

const InputField = withStyles(theme => ({
    root: {
        display: 'block',
        padding: 0
    },
    input: {
        display: 'flex',
        alignItems: 'center',
        height: '27px',
        padding: '0 0 0 15px',
        borderRadius: '4px',
        width: 'calc(100% - 15px)',
        position: 'relative',
        backgroundColor: 'transparent',
        border: '1px solid #dadada',
        color: '#484848',
        fontSize: '12px',
        fontFamily: 'Roboto',
        zIndex: '2',
        '&:focus': {
            borderRadius: '4px',
            backgroundColor: 'inherit'
        }
    },
}))(InputBase)

const styles = makeStyles(() => ({
    wrap: {
        backgroundColor: '#ffffff',
        position: 'relative'
    },
    label: {
        fontSize: '12px',
        fontFamily: 'Roboto',
        color: '#aeaeae',
        marginLeft: '15px',
        display: 'flex',
        height: '32px',
        alignItems: 'center',
        position: 'absolute',
        cursor: 'pointer'
    },
    icon: {
        position: 'absolute',
        right: '15px',
        top: '10px',
        zIndex: '1',
        cursor: 'pointer'
    }
}))


Dropdown.propTypes = {
    label: PropTypes.string,
    value: PropTypes.any,
    handleChange: PropTypes.func,
    elements: PropTypes.array,
}


export default Dropdown