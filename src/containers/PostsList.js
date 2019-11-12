import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles, Grid } from '@material-ui/core'
import {
    NewPost,
    Post
} from '../components/PostsList'
import * as postsActions from '../actions/posts'
import * as modalActions from '../actions/modal'
import { getAll } from '../services/posts'

class PostsList extends Component {
    componentDidMount() {
        const { loadAll } = this.props
        const posts = getAll()
        loadAll(posts)
    }

    render() {
        const {
            classes,
            postsCount,
            mode,
            posts,
            modalShow,
            publish,
            unpublish,
            remove
        } = this.props
        const toFilter = [...posts]
        const filteredPosts = mode === 'dashboard' ? filterActivePosts(toFilter) : toFilter
        filteredPosts.splice(postsCount)

        const newPost = mode === 'adminBoard' ? (
            <Grid item key="newPost" xs={6} md={3} lg={3}>
                <NewPost modalShow={modalShow} />
            </Grid>
        ) : null

        return (
            <div className={classes.wrapper}>
                <div className={classes.title}>
                    Highlights
                </div>
                <Grid container spacing={2} justify="flex-start">
                    {filteredPosts.map(({ id, type, status, context, author }) => (
                        <Grid item key={id} xs={6} md={3} lg={3}>
                            <Post
                                id={id}
                                type={type}
                                status={status}
                                context={context}
                                author={author}
                                mode={mode}
                                modalShow={modalShow}
                                publish={publish}
                                unpublish={unpublish}
                                remove={remove}
                            />
                        </Grid>
                    ))}

                    {newPost}
                </Grid>
            </div>
        )
    }
}

const styles = theme => ({
    wrapper: {
        marginBottom: '32px',
        [theme.breakpoints.down('xs')]: {
            '& > .MuiGrid-container .MuiGrid-item': {
                padding: '9px',
                flexBasis: '100%',
                maxWidth: '100%'
            }
        }
    },
    title: {
        color: '#757575',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        fontSize: '20px',
        margin: '0 0 10px 22px'
    },
    paper: {
        padding: '25px 27px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.15)",
        borderRadius: '5px'
    }
})

const filterActivePosts = (posts) => {
    let activePosts = []
    posts.forEach(item => {
        if(item.status) activePosts.push(item)
    })
    return activePosts
}

PostsList.propTypes = {
    mode: PropTypes.string.isRequired,
    postsCount: PropTypes.number.isRequired,
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    modalShow: PropTypes.func.isRequired,
    publish: PropTypes.func.isRequired,
    unpublish: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
}

const mapStateToProps = ({ posts }) => {
    return {
        posts
    }
}

const actionsCollection = Object.assign({}, postsActions, modalActions)

export default connect(mapStateToProps, actionsCollection)(withStyles(styles)(PostsList))