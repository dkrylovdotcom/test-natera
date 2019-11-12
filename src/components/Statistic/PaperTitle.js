import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const PaperTitle = (props) => {
    const classes = styles()
    return (
        <div className={classes.title}>
            {props.children}
        </div>
    )
}

const styles = makeStyles(theme => ({
    title: {
        color: '#C4C4C4',
        fontSize: '14px',
        textTransform: 'uppercase',
        fontFamily: 'Montserrat',
        marginBottom: '8px',
        marginLeft: '3px',
        letterSpacing: '0.05em'
    },
    [theme.breakpoints.down('xs')]: {
        title: {
            marginBottom: '6px'
        }
    }
}))

PaperTitle.propTypes = {
    children: PropTypes.node.isRequired
}

export default PaperTitle