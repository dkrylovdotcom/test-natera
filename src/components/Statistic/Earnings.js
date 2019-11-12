import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Link } from '@material-ui/core'
import PaperTitle from './PaperTitle'

const Earnings = (props) => {
    const classes = styles()
    const { total, changes } = props

    return (
        <Fragment>
            <PaperTitle>Earnings</PaperTitle>

            <div className={classes.earningsData}>
                <div
                    className={classes.total}>

                    <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.95 11.85C4.545 10.965 3.45 10.05 3.45 8.625C3.45 6.99 4.965 5.85 7.5 5.85C9.63 5.85 10.695 6.66 11.085 7.95C11.265 8.55 11.76 9 12.39 9H12.84C13.83 9 14.535 8.025 14.19 7.095C13.56 5.325 12.09 3.855 9.75 3.285V2.25C9.75 1.005 8.745 0 7.5 0C6.255 0 5.25 1.005 5.25 2.25V3.24C2.34 3.87 0 5.76 0 8.655C0 12.12 2.865 13.845 7.05 14.85C10.8 15.75 11.55 17.07 11.55 18.465C11.55 19.5 10.815 21.15 7.5 21.15C5.025 21.15 3.75 20.265 3.255 19.005C3.03 18.42 2.52 18 1.905 18H1.485C0.48 18 -0.225 19.02 0.15 19.95C1.005 22.035 3 23.265 5.25 23.745V24.75C5.25 25.995 6.255 27 7.5 27C8.745 27 9.75 25.995 9.75 24.75V23.775C12.675 23.22 15 21.525 15 18.45C15 14.19 11.355 12.735 7.95 11.85Z" fill="#6883E4"/>
                    </svg>&nbsp;
                    {total}
                </div>
                <div className={classes.changes}>
                    <span className={classes.changesBlueText}>{changes}</span> since last year
                </div>
            </div>
            <Link className={classes.chartLink} color="inherit" href="#">
                All statistics&nbsp;&nbsp;
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.834269 7.16845H10.1531L6.08182 11.2397C5.75646 11.565 5.75646 12.099 6.08182 12.4243C6.40719 12.7497 6.93278 12.7497 7.25814 12.4243L12.756 6.92651C13.0813 6.60114 13.0813 6.07555 12.756 5.75019L7.26648 0.244012C7.11062 0.0877926 6.899 0 6.67832 0C6.45765 0 6.24603 0.0877926 6.09017 0.244012C5.7648 0.569377 5.7648 1.09497 6.09017 1.42033L10.1531 5.49991H0.834269C0.375421 5.49991 0 5.87533 0 6.33418C0 6.79303 0.375421 7.16845 0.834269 7.16845Z" fill="currentColor"/>
                </svg>
            </Link>
        </Fragment>
    )
}

const styles = makeStyles(theme => ({
    earningsData: {
        marginTop: '-8px',
        height: '152px'
    },
    total: {
        fontSize: '32px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        '& svg': {
            position: 'relative',
            top: '2px',
            marginRight: '3px'
        }
    },
    changes: {
        fontSize: '12px',
        color: '#C4C4C4',
        fontFamily: 'Roboto',
        marginLeft: '5px'
    },
    changesBlueText: {
        color: '#6883E4',
        fontSize: '12px'
    },
    chartLink: {
        letterSpacing: "1px",
        textTransform: "uppercase",
        color: '#6883E4',
        fontSize: '14px',
        fontFamily: 'Roboto',
        '&:hover': {
            textDecoration: 'none',
        }
    },
    [theme.breakpoints.between('xs', 'sm')]: {
        chartLink: {
            fontSize: '12px',
        }
    },
    [theme.breakpoints.down('sm')]: {
        total: {
            fontSize: '24px',
            '& svg': {
                top: '4px',
                marginRight: '3px',
                width: '12px'
            }
        }
    },
    [theme.breakpoints.down('xs')]: {
        earningsData: {
            height: 'auto',
            marginTop: 0
        },
        total: {
            fontSize: '32px',
            '& svg': {
                top: '2px',
                marginRight: '3px',
                width: 'auto'
            },
        },
        chartLink: {
            position: 'absolute',
            bottom: '25px',
            color: '#C4C4C4',
            '& svg': {
                top: '1px',
                marginLeft: '5px',
                position: 'relative'
            }
        }
    }
}))

Earnings.propTypes = {
    total: PropTypes.number,
    changes: PropTypes.string
}

export default Earnings