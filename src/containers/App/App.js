import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    withStyles,
    Container,
    CssBaseline
} from '@material-ui/core'
import AdminBoard from './AdminBoard'
import Carousel from './Carousel'
import Dashboard from './Dashboard'
import { Header } from '../../components/App'
import * as appActions from '../../actions/app'
import * as notifyActions from '../../actions/notification'
import ModalWrap from '../Modal/ModalWrap'
import { getAll } from '../../services/notification'
import windowSize from 'react-window-size'


class App extends Component {
    componentDidMount() {
        const { startNotify } = this.props
        const { message, subMessage } = getAll()
        startNotify(message, subMessage)
    }
    render() {
        const {
            windowWidth,
            classes,
            config,
            mode,
            changeMode
        } = this.props

        const desktopView = (
            <Carousel duration="300" mode={mode}>
                <Dashboard config={config.dashboard} />
                <AdminBoard config={config.adminBoard} />
            </Carousel>
        )
        const mobileView = <Dashboard config={config.dashboard} />

        return (
            <Fragment>
                <CssBaseline />
                <Header mode={mode} changeMode={changeMode} windowWidth={windowWidth} />
                <main>
                    <Container maxWidth="md" className={classes.container}>
                        {(windowWidth <= 960) ? mobileView : desktopView}
                    </Container>
                    <ModalWrap />
                </main>
            </Fragment>
        )
    }
}

const styles = theme => ({
    slide: {
        float: 'left'
    },
    container: {
        maxWidth: '984px',
        height: '1400px',
        padding: '0 0 0 0',
    },

    [theme.breakpoints.between('xs', 'sm')]: {
        container: {
            padding: '10px 15px 45px 10px'
        }
    },
    [theme.breakpoints.down('xs')]: {
        container: {
            padding: '30px 20px 0 20px',
            height: 'auto'
        }
    },
})

App.propTypes = {
    mode: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    const { app: {mode} } = state
    return {
        mode
    }
}
const actionsCollection = Object.assign({}, appActions, notifyActions)

export default connect(
    mapStateToProps,
    actionsCollection
)(withStyles(styles)(windowSize(App)))