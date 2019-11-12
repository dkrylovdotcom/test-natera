import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, Container } from '@material-ui/core'

const Header = (props) => {
    const classes = styles()
    const { windowWidth, mode, changeMode } = props

    const activeMode = clsx(classes.modeButton, classes.modeActiveButton)
    const desktopView = (
        <React.Fragment>
            <div
                onClick={() => mode !== 'dashboard' ? changeMode('dashboard') : null}
                className={mode === 'dashboard' ? activeMode : classes.modeButton}>

                Dashboard mode
            </div>
            <div
                onClick={() => mode !== 'adminBoard' ? changeMode('adminBoard') : null}
                className={mode === 'adminBoard' ? activeMode : classes.modeButton}>

                Edit mode
            </div>
        </React.Fragment>
    )

    const mobileView = (
        <div className={classes.mobileButon}>Dashboard mode</div>
    )

    return (
        <header className={classes.header}>
            <Container maxWidth="md" className={classes.toolbar}>
                {(windowWidth <= 960) ? mobileView : desktopView}
            </Container>
        </header>
    )
}

const styles = makeStyles(theme => ({
    header: {
        background: '#6883e4',
    },

    toolbar: {
        maxWidth: '984px',
        display: 'flex',
        justifyContent: 'space-between',
        height: '202px',
        padding: '45px 15px 0 15px',
        color: "#fff"
    },
    modeButton: {
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '20px',
        fontFamily: 'Montserrat',
        color: 'rgba(255, 255, 255, 0.5)'
    },
    modeActiveButton: {
        color: '#fff',
        '&::after': {
            content: '" "',
            display: 'block',
            width: '100%',
            height: '3px',
            marginTop: '5px',
            background: '#fff'
        }
    },
    mobileButon: {
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '20px',
        fontFamily: 'Montserrat',
        color: '#fff',
        marginLeft: '40px'
    },
    [theme.breakpoints.between('xs', 'sm')]: {
        toolbar: {
            height: '75px',
            padding: '0',
            alignItems: 'center',
            marginBottom: '15px'
        }
    },
    [theme.breakpoints.down('xs')]: {
        toolbar: {
            marginBottom: 0
        }
    }
}))

Header.propTypes = {
    mode: PropTypes.string.isRequired,
    changeMode: PropTypes.func.isRequired
}

export default Header