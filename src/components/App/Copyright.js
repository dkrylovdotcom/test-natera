import React from 'react'
import { makeStyles, Link } from '@material-ui/core'

export default function Copyright() {
    const classes = styles()
    return (
        <div className={classes.copyright}>
            {'Hosta LLC 2015 — '}{new Date().getFullYear()}{'. Made by'}&nbsp;
            <Link color="inherit" href="mailto:mail@dkrylov.com">
                Dmitriy Krylov
            </Link>
        </div>
    )
}

const styles = makeStyles({
    copyright: {
        fontSize: '14px',
        fontFamily: 'Roboto',
        color: '#757575',
        height: '135px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})