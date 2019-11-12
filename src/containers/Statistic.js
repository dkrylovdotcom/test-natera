import React, { Component } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    withStyles,
    Grid,
    Paper,
} from '@material-ui/core'
import { Money, Work } from '../components/Statistic'
import * as actions from '../actions/statistic'
import { getAll } from '../services/statistic'

class Statistic extends Component {
    componentDidMount() {
        const { loadAll } = this.props
        const statistic = getAll()
        loadAll(statistic)
    }
    render() {
        const { classes, money, work } = this.props

        const moneyContainerClass = clsx(classes.paper, classes.moneyPaper)
        const workContainerClass = clsx(classes.paper, classes.workPaper)

        return (
            <Grid className={classes.statisticContainer} container spacing={3}>
                <Grid item xs={12} md={8} lg={8}>
                    <Paper className={moneyContainerClass}>
                        <Money
                            earnings={money.earnings}
                            chart={money.chart} />
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4} lg={4}>
                    <Paper className={workContainerClass}>
                        <Work
                            employes={work.employes}
                            projects={work.projects}
                            specializations={work.specializations} />
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

const styles = theme => ({
    statisticContainer: {
        marginBottom: '15px'
    },
    paper: {
        position: 'relative',
        padding: '25px 27px',
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.15)",
        borderRadius: '5px',
        height: '240px'
    },
    moneyPaper: {},
    workPaper: {
        padding: '25px 40px'
    },
    [theme.breakpoints.between('xs', 'sm')]: {
        statisticContainer: {
            '& > .MuiGrid-item:last-child': {
                flexBasis: '37.333333%',
                maxWidth: '37.333333%',
                padding: '8px'
            }
        },
        paper: {
            padding: '25px 20px'
        },
        workPaper: {
            padding: '25px 20px'
        }
    },
    [theme.breakpoints.up('md')]: {
        '& > .MuiGrid-item:first-child': {
            flexBasis: '62.666667%',
            maxWidth: '62.666667%'
        },
        '& > .MuiGrid-item:last-child': {
            flexBasis: '37.333333%',
            maxWidth: '37.333333%',
            padding: '12px 12px 12px 8px'
        },
    },
    [theme.breakpoints.up('xs')]: {
        statisticContainer: {
            '& > .MuiGrid-item:first-child': {
                flexBasis: '62.666667%',
                maxWidth: '62.666667%'
            },
            '& > .MuiGrid-item:last-child': {
                flexBasis: '37.333333%',
                maxWidth: '37.333333%',
                padding: '12px 12px 12px 8px'
            },
        }
    },
    [theme.breakpoints.down('xs')]: {
        statisticContainer: {
            marginBottom: '20px',
            '& > .MuiGrid-item:first-child': {
                flexBasis: '100%',
                maxWidth: '100%'
            },
            '& > .MuiGrid-item:last-child': {
                flexBasis: '100%',
                maxWidth: '100%',
                padding: '6px 12px'
            }
        },
        paper: {
            height: 'auto',
            padding: '20px 2px'
        },
        moneyPaper: {
            '& .MuiGrid-container > .MuiGrid-item:first-child': {
                padding: '12px 12px 12px 35px'
            },
            '& .MuiGrid-container > .MuiGrid-item:last-child': {
                padding: '13px 13px 12px 22px'
            },
            '& > .MuiGrid-container > .MuiGrid-item': {
                flexBasis: '100%',
                maxWidth: '100%'
            }
        },
        workPaper: {
            padding: '20px 40px'
        }
    },
})

const moneyShape = {
    earnings: PropTypes.object.isRequired,
    chart: PropTypes.object.isRequired,
}
const workShape = {
    employes: PropTypes.object.isRequired,
    projects: PropTypes.object.isRequired,
    specializations: PropTypes.arrayOf(PropTypes.object).isRequired
}

Statistic.propTypes = {
    money: PropTypes.shape(moneyShape).isRequired,
    work: PropTypes.shape(workShape).isRequired
}

const mapStateToProps = (state) => {
    const { statistic: {money, work} } = state
    return {
        money,
        work
    }
}

export default connect(mapStateToProps, actions)(withStyles(styles)(Statistic))