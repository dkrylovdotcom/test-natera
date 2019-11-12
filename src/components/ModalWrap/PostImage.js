import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import PostAuthor from './PostAuthor'

const PostImage = (props) => {
    const classes = styles()
    const { context: {title, image, text, author} } = props

    return (
        <Fragment>
            <div
                className={classes.modalImage}
                style={{backgroundImage: "url("+image+")"}} />
            <div className={classes.wrap}>
                <h2 className={classes.modalTitle} >{title}</h2>
                <div className={classes.modalText} dangerouslySetInnerHTML={{__html: text}} />
                <PostAuthor
                    name={author.name}
                    image={author.image}
                    role={author.role} />
            </div>
        </Fragment>
    )
}

const styles = makeStyles(() => ({
    wrap: {
        padding: '20px 50px',
        background: '#FFF'
    },
    modalTitle: {
        fontSize: '24px',
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        color: '#484848',
        lineHeight: '30px',
        marginBottom: '25px'
    },
    modalText: {
        fontSize: '14px',
        fontFamily: 'Roboto',
        color: '#484848',
        lineHeight: '20px',
        marginBottom: '35px'
    },
    modalImage: {
        height: '240px',
        backgroundSize: 'cover'
    }
}))

const contextShape = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired,
}

PostImage.propTypes = {
    context: PropTypes.shape(contextShape).isRequired
}

export default PostImage