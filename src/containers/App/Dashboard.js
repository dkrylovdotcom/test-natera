import React from 'react'
import PropTypes from 'prop-types'
import Statistic from '../Statistic'
import Projects from '../Projects'
import PostsList from '../PostsList'
import Notification from '../Notification'
import { Copyright } from '../../components/App'

const Dashboard = (props) => {
    const { config: {postsCount, notificationHideIn} } = props
    const mode = 'dashboard'

    return (
        <div>
            <Statistic mode={mode} />

            <PostsList mode={mode} postsCount={postsCount} />

            <Notification mode={mode} hideIn={notificationHideIn} />

            <Projects mode="dashboard" />

            <Copyright />
        </div>
    )
}

Dashboard.propTypes = {
    config: PropTypes.object.isRequired
}

export default Dashboard