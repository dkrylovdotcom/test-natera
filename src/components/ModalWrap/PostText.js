import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import PostAuthor from './PostAuthor'

const PostText = (props) => {
    const classes = styles()
    const { context: {title, text, author} } = props

    return (
        <div className={classes.wrap}>
            <h1 className={classes.modalTitle} >{title}</h1>
            <div className={classes.modalText} dangerouslySetInnerHTML={{__html: text}} />
            <PostAuthor
                name={author.name}
                image={author.image}
                role={author.role} />
        </div>
    )
}

const styles = makeStyles(() => ({
    wrap: {
        padding: '20px 50px',
        background: '#FFF'
    },
    modalTitle: {
        fontSize: '24px',
        fontWeight: 'normal',
        fontFamily: 'Roboto',
        color: '#484848',
        lineHeight: '30px',
        marginBottom: '25px',
        maxWidth: '550px'
    },
    modalText: {
        fontSize: '14px',
        fontFamily: 'Roboto',
        color: '#484848',
        lineHeight: '20px',
        marginBottom: '35px'
    }
}))


const contextShape = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired,
}

PostText.propTypes = {
    context: PropTypes.shape(contextShape).isRequired
}

export default PostText