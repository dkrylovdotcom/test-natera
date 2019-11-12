import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from "@material-ui/core"
import windowSize from 'react-window-size'

class Carousel extends Component {
    constructor (props) {
        super(props)

        this.state = {
            frames: props.children,
            current: 0
        }

        this.debounceTimeoutId = null
    }

    componentDidMount () {
        this.hideFrames()
        this.updateFrameSize(() => {
            this.prepareSiblingFrames()
            this.prev()
        })

        window.addEventListener('resize', this.onResize)
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.onResize)
    }

    componentDidUpdate(_, prevState) {
        if (this.state.frames.length && this.state.frames.length !== prevState.frames.length) {
            // reset to default state
            this.hideFrames()
        }

        this.updateFrameSize(() => {
            this.prepareSiblingFrames()
        })
        if(prevState.current === 0) {
            this.next()
        } else {
            this.prev()
        }
    }
    shouldComponentUpdate(nextProps) {
        return this.props.mode !== nextProps.mode
    }

    hideFrames () {
        for (let i = 1; i < this.state.frames.length; i++) {
            this.refs['f' + i].style.opacity = 0
        }
    }

    onResize = () => {
        clearTimeout(this.debounceTimeoutId)
        if(this.props.windowWidth > 1200) {
            this.debounceTimeoutId = setTimeout(() => {
                this.updateFrameSize(() => {
                    this.prepareSiblingFrames()
                })
            }, 25)
        }
    }

    next = () => {
        const { current, frames } = this.state
        if (current === frames.length - 1) return
        this.transitFramesTowards('left')
    }

    prev = () => {
        if (this.state.current === 0) return
        this.transitFramesTowards('right')
    }

    updateFrameSize (cb) {
        const { width, height } = window.getComputedStyle(this.refs.wrapper)

        this.setState({
            frameWidth: parseFloat(width.split('px')[0]),
            frameHeight: parseFloat(height.split('px')[0])
        }, cb)
    }

    getSiblingFrames () {
        return {
            current: this.refs['f' + this.getFrameId()],
            prev: this.refs['f' + this.getFrameId('prev')],
            next: this.refs['f' + this.getFrameId('next')]
        }
    }

    prepareSiblingFrames () {
        const siblings = this.getSiblingFrames()
        const { duration } = this.props

        this.state.current === 0 && (siblings.prev = undefined)
        this.state.current === this.state.frames.length - 1 && (siblings.next = undefined)
        this.setState({ movingFrames: siblings })

        // prepare frames position
        translateXY(siblings.prev, -this.state.frameWidth, 0, duration)
        translateXY(siblings.next, this.state.frameWidth, 0, duration)

        return siblings
    }

    getFrameId (pos) {
        const { frames, current } = this.state
        const total = frames.length
        switch (pos) {
            case 'prev':
                return (current - 1 + total) % total
            case 'next':
                return (current + 1) % total
            default:
                return current
        }
    }

    transitFramesTowards (direction) {
        const { prev, current, next } = this.state.movingFrames
        const { duration } = this.props

        const currentId = this.state.current
        let newCurrentId = this.state.current
        switch (direction) {
            case 'left':
                translateXY(current, -this.state.frameWidth, 0, duration)
                translateXY(next, 0, 0, duration)
                next.style.opacity = '1'
                newCurrentId = this.getFrameId('next')
                break
            case 'right':
                translateXY(current, this.state.frameWidth, 0, duration)
                translateXY(prev, 0, 0, duration)
                prev.style.opacity = '1'
                newCurrentId = this.getFrameId('prev')
                break
            default:
                translateXY(current, 0, 0, duration)
                translateXY(prev, -this.state.frameWidth, 0, duration)
                translateXY(next, this.state.frameWidth, 0, duration)
        }

        this.refs['f' + currentId].style.opacity = 0

        this.setState({ current: newCurrentId })
    }

    render () {
        const { classes } = this.props
        const { frames } = this.state

        return (
            <div
                ref='wrapper'
                className={classes.wrapper}>
                {
                    frames.map((frame, i) => {
                        return <div ref={'f' + i} key={i} className={classes.frame}>{frame}</div>
                    })
                }
                { this.props.frames && this.props.children }
            </div>
        )
    }
}


const styles = theme => ({
    wrapper: {
        width: '100%',
        height: '100%',
        position: 'relative',
        marginTop: '-80px',
        overflow: 'hidden',
        padding: '10px 15px 10px 15px'
    },
    frame: {
        '&:nth-child(2)': {
            top: 0,
            position: 'absolute',
            width: 'calc(100% - 30px)'
        },
        '&::after': {
            content: '" "',
            display: 'block',
            clear: 'both'
        }
    },
    [theme.breakpoints.down('sm')]: {
        wrapper: {
            marginTop: 0
        }
    }
})

const translateXY = (el, x, y, duration = 0) => {
    if (!el) return

    el.style.transitionDuration = duration + 'ms'
    el.style.webkitTransitionDuration = duration + 'ms'

    el.style.transform = `translate(${x}px, ${y}px)`
    el.style.webkitTransform = `translate(${x}px, ${y}px) translateZ(0)`
}

Carousel.propTypes = {
    mode: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default withStyles(styles)(windowSize(Carousel))