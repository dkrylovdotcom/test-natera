import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Projects from '../Projects'
import PostsList from '../PostsList'
import Notification from '../Notification'
import { Copyright } from '../../components/App'

const AdminBoard = (props) => {
    const classes = styles()
    const { config: {postsCount} } = props
    const mode = 'adminBoard'

    return (
        <div className={classes.container}>
            <PostsList mode={mode} postsCount={postsCount} />

            <div className={classes.projectStatusesContainer}>
                <Projects mode={mode} />
            </div>

            <Notification mode={mode} />

            <Copyright />
        </div>
    )
}

const styles = makeStyles({
    container: {
        marginTop: '105px',
    },
    projectStatusesContainer: {
        margin: '40px 0'
    }
})

AdminBoard.propTypes = {
    config: PropTypes.object.isRequired
}

export default AdminBoard