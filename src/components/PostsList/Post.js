import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, Card, } from '@material-ui/core'
import CardAuthor from './CardAuthor'
import PostControl from './PostControl'
import PostImage from './PostImage'
import PostText from './PostText'
import { getOne } from '../../services/posts'

const Post = (props) => {
    const classes = styles()
    const {
        mode,
        id,
        type,
        status,
        context,
        author,
        modalShow,
        publish,
        unpublish,
        remove
    } = props

    const postClassName = mode === 'dashboard' ?
        clsx(classes.post, classes.postDashboardMode) : classes.post

    const notPublishedLabel = (
        <div className={classes.notPublishedLabel}>
            <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.933152 0.929059C0.720327 0.716235 0.720327 0.372442 0.933152 0.159618C1.14598 -0.053206 1.49523 -0.053206 1.70805 0.159618L10.6085 9.07094C10.8213 9.28377 10.8213 9.62756 10.6085 9.84038C10.3956 10.0532 10.0518 10.0532 9.83902 9.84038L8.35471 8.35607C7.62347 8.63984 6.8322 8.80355 6.00273 8.80355C3.27422 8.80355 0.944066 7.10641 0 4.71078C0.420191 3.63574 1.12415 2.70805 2.00819 2.00409L0.933152 0.929059ZM8.73132 4.71078C8.73132 3.20464 7.50894 1.98227 6.0028 1.98227C5.7245 1.98227 5.4571 2.03684 5.20062 2.11323L4.01645 0.929059C4.644 0.727149 5.30976 0.618009 6.0028 0.618009C8.73132 0.618009 11.0615 2.31514 12.0055 4.70532C11.629 5.66576 11.0287 6.50614 10.2702 7.17735L8.60035 5.5075C8.67675 5.25648 8.73132 4.98909 8.73132 4.71078ZM6.00277 7.43929C4.49663 7.43929 3.27426 6.21692 3.27426 4.71078C3.27426 4.29059 3.37249 3.89222 3.54165 3.54297L4.39841 4.39973C4.38203 4.49795 4.36566 4.60164 4.36566 4.71078C4.36566 5.61664 5.09691 6.34788 6.00277 6.34788C6.11191 6.34788 6.21014 6.33151 6.31382 6.30968L7.17058 7.16644C6.81587 7.34106 6.42296 7.43929 6.00277 7.43929ZM7.6234 4.53069C7.54155 3.76671 6.94128 3.1719 6.18275 3.09004L7.6234 4.53069Z" fill="#DF4036"/>
            </svg>
            Not published
        </div>
    )

    const ContextComponent = postTypes[type]

    const onClick = () => {
        const post = getOne(id)
        if(post) {
            modalShow(post)
        }
    }

    return (
        <Card
            onClick={mode === 'dashboard' ? onClick : null}
            className={postClassName}>

            {
                mode === 'adminBoard' ?
                    <PostControl
                        id={id}
                        status={status}
                        publish={publish}
                        unpublish={unpublish}
                        remove={remove}
                    /> : null
            }

            <ContextComponent mode={mode} context={context} />

            {!status ? notPublishedLabel : null}

            <CardAuthor
                name={author.name}
                image={author.image}
                role={author.role} />
        </Card>
    )
}

const postTypes = {
    'PostText': PostText,
    'PostImage': PostImage
}

const styles = makeStyles(theme => ({
    post: {
        background: '#fff',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.15)',
        borderRadius: '5px',
        height: '191px',
        transition: 'all ease 0.3s',
        cursor: 'pointer',
        position: 'relative'
    },
    postDashboardMode: {
        '&:hover': {
            marginTop: '-8px',
            boxShadow: '0px 4px 15px rgba(28, 58, 165, 0.4)'
        }
    },
    notPublishedLabel: {
        display: 'block',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: '10px',
        fontFamily: 'Montserrat',
        color: '#DF4036',
        backgroundColor: '#FFECEB',
        position: 'absolute',
        bottom: '55px',
        width: '100%',
        '& svg': {
            marginRight: '10px'
        }
    },
    [theme.breakpoints.down('xs')]: {
        post: {
            height: '160px'
        }
    }
}))

Post.propTypes = {
    mode: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    context: PropTypes.object.isRequired,
    author: PropTypes.object.isRequired,
    modalShow: PropTypes.func.isRequired,
    publish: PropTypes.func.isRequired,
    unpublish: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default Post