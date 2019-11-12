import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Grid, Chip } from '@material-ui/core'
import PaperTitle from './PaperTitle'

const Work = (props) => {
    const classes = styles()
    const { employes, projects, specializations } = props

    return (
        <Fragment>
            <Grid className={classes.topBlock} container spacing={3}>
                <Grid item xs={6} md={6} lg={6}>
                    <PaperTitle>Employes</PaperTitle>
                    <div className={classes.counterStat}>
                        <span className={classes.icon}>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 0C5.824 0 0 5.824 0 13C0 20.176 5.824 26 13 26C20.176 26 26 20.176 26 13C26 5.824 20.176 0 13 0ZM17.693 8.24201C19.084 8.24201 20.202 9.36001 20.202 10.751C20.202 12.142 19.084 13.26 17.693 13.26C16.302 13.26 15.184 12.142 15.184 10.751C15.171 9.36001 16.302 8.24201 17.693 8.24201ZM12.961 9.256C12.961 7.566 11.583 6.188 9.89301 6.188C8.19001 6.188 6.82501 7.553 6.82501 9.256C6.82501 10.946 8.20301 12.324 9.89301 12.324C11.583 12.324 12.961 10.946 12.961 9.256ZM9.89301 18.057V22.932C6.77301 21.957 4.30301 19.552 3.21101 16.484C4.57601 15.028 7.98201 14.287 9.89301 14.287C10.582 14.287 11.453 14.391 12.363 14.573C10.231 15.704 9.89301 17.199 9.89301 18.057ZM11.973 23.348C12.311 23.387 12.649 23.4 13 23.4C17.407 23.4 21.164 20.644 22.685 16.783C21.489 15.795 19.084 15.288 17.693 15.288C15.795 15.288 11.973 16.211 11.973 18.057V23.348Z" fill="#6883E4"/>
                            </svg>
                        </span>
                        <span>{employes.count}</span>
                    </div>

                    <div className={classes.textStat} >
                        You're in top
                        <span className={classes.statBlueText}> {employes.part}</span>
                    </div>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <PaperTitle>Projects</PaperTitle>
                    <div className={classes.counterStat}>
                        <span className={classes.icon}>
                            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M20.3 5.8H26.1C27.7095 5.8 29 7.0905 29 8.7V24.65C29 26.2595 27.7095 27.55 26.1 27.55H2.9C1.2905 27.55 0 26.2595 0 24.65L0.0145 8.7C0.0145 7.0905 1.2905 5.8 2.9 5.8H8.7V2.9C8.7 1.2905 9.9905 0 11.6 0H17.4C19.0095 0 20.3 1.2905 20.3 2.9V5.8ZM11.6 5.79999H17.4V2.89999H11.6V5.79999Z" fill="#6883E4"/>
                            </svg>
                        </span>
                        <span>{projects.count}</span>
                    </div>

                    <div className={classes.textStat}>
                        <span className={classes.statBlueText}> {projects.thisMonthCount}</span> in this month
                    </div>
                </Grid>
            </Grid>


            <div>
                <PaperTitle>Top Specialization</PaperTitle>

                <div className={classes.specList}>
                    {specializations.map(({id, name}) => (
                        <Chip key={id} label={name} />
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

const styles = makeStyles(theme => ({
    counterStat: {
        fontSize: '24px',
        fontWeight: 'bold',
        display: 'flex',
        fontFamily: 'Roboto'
    },
    icon: {
        width: '30px',
        height: '30px',
        marginRight: '12px',
    },
    textStat: {
        color: '#C4C4C4',
        fontSize: '12px',
        fontFamily: 'Roboto'
    },
    statBlueText: {
        color: '#6883E4',
        fontSize: '12px'
    },
    topBlock: {
        fontSize: '12px',
        marginBottom: '10px',
        '&::after': {
            content: '" "',
            display: 'block',
            width: '90%',
            height: '1px',
            background: '#ECECEC',
            margin: '20px auto 5px auto'
        },
        '& > div:nth-child(2)': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }
    },
    specList: {
        marginTop: '15px',
        '& .MuiChip-root': {
            fontSize: '12px',
            background: 'rgba(104, 131, 228, 0.2)',
            borderRadius: '42px',
            marginRight: '6px',
            height: '20px',
            minWidth: '50px',
            '&:hover': {
                background: 'rgba(104, 131, 228, 0.5)',
                cursor: 'pointer'
            }
        }
    },
    [theme.breakpoints.between('xs', 'sm')]: {
        topBlock: {
            '& .MuiChip-root': {
                margin: '5px 0px 10px 10px',
            }
        },
        specList: {
            '& .MuiChip-root': {
                marginRight: '3px',
            }
        }
    },
    [theme.breakpoints.down('xs')]: {
        topBlock: {
            '&::after': {
                margin: '20px auto 10px auto'
            }
        },
        specList: {
            marginTop: '10px',
            '& .MuiChip-root': {
                marginRight: '6px',
            }
        }
    }
}))

Work.propTypes = {
    employes: PropTypes.object.isRequired,
    projects: PropTypes.object.isRequired,
    specializations: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Work