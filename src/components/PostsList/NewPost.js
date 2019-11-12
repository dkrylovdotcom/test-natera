import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Card } from '@material-ui/core'

const NewPost = (props) => {
    const classes = styles()
    const { modalShow } = props

    return (
        <Card
            className={classes.post}>
            <div>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M21 0C9.408 0 0 9.408 0 21C0 32.592 9.408 42 21 42C32.592 42 42 32.592 42 21C42 9.408 32.592 0 21 0ZM21 10.5C19.845 10.5 18.9 11.445 18.9 12.6V18.9H12.6C11.445 18.9 10.5 19.845 10.5 21C10.5 22.155 11.445 23.1 12.6 23.1H18.9V29.4C18.9 30.555 19.845 31.5 21 31.5C22.155 31.5 23.1 30.555 23.1 29.4V23.1H29.4C30.555 23.1 31.5 22.155 31.5 21C31.5 19.845 30.555 18.9 29.4 18.9H23.1V12.6C23.1 11.445 22.155 10.5 21 10.5ZM4.2 21C4.2 30.261 11.739 37.8 21 37.8C30.261 37.8 37.8 30.261 37.8 21C37.8 11.739 30.261 4.2 21 4.2C11.739 4.2 4.2 11.739 4.2 21Z" fill="#6883E4" fillOpacity="0.2"/>
            </svg>
            <div className={classes.newPost}>New post</div>
            </div>
            <div
                className={classes.createBtn}
                onClick={() => modalShow({"type": "NewPost"})}>

                Create
            </div>

        </Card>
    )
}

const styles = makeStyles(() => ({
    post: {
        cursor: 'default',
        background: '#fff',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.15)',
        borderRadius: '5px',
        height: '191px',
        transition: 'all ease 0.3s',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    newPost: {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        color: '#6883E4',
        marginBottom: '32px'
    },
    createBtn: {
        cursor: 'pointer',
        textTransform: 'uppercase',
        background: '#6883E4',
        color: '#fff',
        width: '148px',
        height: '24px',
        fontSize: '12px',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        borderRadius: '5px',
        letterSpacing: '0.1em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

NewPost.propTypes = {
    modalShow: PropTypes.func.isRequired
}

export default NewPost