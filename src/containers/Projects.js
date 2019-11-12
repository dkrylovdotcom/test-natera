import React, { Component, Fragment } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles, Paper, Table } from '@material-ui/core'
import {
    TableBody,
    TableHead
} from '../components/Projects'
import * as actions from '../actions/projects'
import { getAll } from '../services/project'

class Projects extends Component {
    componentDidMount() {
        const { loadAll } = this.props
        const projects = getAll()
        loadAll(projects)
    }
    render() {
        const { classes, mode, projects, remove } = this.props

        if(projects.length === 0) {
            return (<div className={classes.noProjects }>No projects found</div>)
        }

        const wrapClass = mode === 'adminBoard' ?
            clsx(classes.paper, classes.adminPaper) : classes.paper

        return (
            <Fragment>
                <div className={classes.title}>
                    Projects statuses
                </div>
                <Paper className={wrapClass}>
                    <Table className={classes.table} size="small">
                        <TableHead mode={mode} />
                        <TableBody
                            mode={mode}
                            projects={projects}
                            remove={remove} />
                    </Table>
                </Paper>
            </Fragment>
        )
    }
}

const styles = theme => ({
    title: {
        color: '#757575',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        fontSize: '20px',
        margin: '0 0 10px 35px'
    },
    paper: {
        padding: '25px 75px 10px 60px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.15)",
        borderRadius: '5px',
        [theme.breakpoints.down('xs')]: {
            padding: '22px 13px 30px 27px'
        },
        [theme.breakpoints.down('md')]: {
            padding: '22px 13px 30px 27px'
        }
    },
    adminPaper: {
        padding: '30px 5px 7px 60px'
    },
    table: {},
    noProjects: {
        textAlign: 'center'
    }
})

Projects.propTypes = {
    mode: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(PropTypes.object).isRequired,
    remove: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    const { projects } = state
    return {
        projects
    }
}

export default connect(mapStateToProps, actions)(withStyles(styles)(Projects))