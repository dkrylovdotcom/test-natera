import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
    Input,
    Textarea,
    InputFile,
    Dropdown,
    PostFormControl
} from '../../components/Form'
import { getAuthors } from '../../services/posts'
import * as actions from '../../actions/posts'

class PostForm extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            text: '',
            image: null,
            author: null,
            status: false
        }

        this.authors = this.authors = getAuthors()
        this.imageLabel = null
    }

    onTitleChange = ({ target }) => {
        const { value } = target
        this.setState({ title: value })
    }
    onTextChange = ({ target }) => {
        const { value } = target
        this.setState({ text: value })
    }
    onImageChange = ({ target }) => {
        const reader = new FileReader()
        const fileName = target.files[0].name

        reader.readAsDataURL(target.files[0])
        reader.onload = (e) => {
            this.imageLabel = fileName
            this.setState((prevState) => ({
                image: e.target.result
            }))
        }
    }
    onAuthorChange = ({ target: {value} }) => {
        let author = null
        this.authors.forEach((item) => {
            if(item.id === value) {
                author = item
            }
        })
        this.setState({ author })
    }
    onStatusChange = (prevState) => {
        this.setState({ status: !prevState.status })
    }
    onPublish = () => {
        const { addPost, modalClose } = this.props
        const {
            title,
            text,
            image,
            author,
            status
        } = this.state

        // Simple validation
        if(title==='' && !image) {
            alert('Set "Title" / "Title" + "Photo" to add post')
            return
        } else if(!author) {
            alert('Set "Author" to add post')
            return
        }

        const type = image ? 'PostImage' : 'PostText'
        const createTime = new Date().getTime()

        addPost(
            type,
            title,
            text,
            image,
            author,
            status,
            createTime
        )
        modalClose()

        this.resetForm()
    }
    resetForm() {
        this.imageLabel = null
        this.setState({
            title: '',
            text: '',
            image: null,
            author: null,
            status: false
        })
    }

    render() {
        const { classes, modalClose } = this.props
        const { title, text, status, author } = this.state

        return (
            <div className={classes.wrap}>
                <h1 className={classes.modalTitle} >New post</h1>

                <div className={classes.group}>
                    <label className={classes.label}>Message</label>
                    <Input onChange={this.onTitleChange} value={title} placeholder="Title" />
                    <Textarea onChange={this.onTextChange} value={text} placeholder="Text" />
                </div>
                <div className={classes.group}>
                    <label className={classes.label}>Photo</label>

                    <InputFile
                        label="Upload"
                        placeholder={this.imageLabel}
                        onChange={this.onImageChange}
                        accept="image/*" />
                </div>
                <div className={classes.group}>
                    <label className={classes.label}>Author</label>

                    <Dropdown
                        label="Who said?"
                        value={author ? author.id : null}
                        elements={this.authors}
                        handleChange={this.onAuthorChange}
                    />
                </div>
                <PostFormControl
                    status={status}
                    onStatusChange={this.onStatusChange}
                    modalClose={modalClose}
                    onPublish={this.onPublish} />
            </div>
        )
    }
}

const styles = {
    wrap: {
        padding: '20px 50px'
    },
    modalTitle: {
        color: '#757575',
        fontSize: '20px',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        marginBottom: '30px'
    },
    group: {
        marginBottom: '30px'
    },
    label: {
        fontSize: '14px',
        fontFamily: 'Montserrat',
        letterSpacing: '0.05em',
        color: '#C4C4C4',
        textTransform: 'uppercase',
        display: 'block',
        marginBottom: '10px'
    }
}


PostForm.propTypes = {
    addPost: PropTypes.func,
    modalClose: PropTypes.func,
}

export default connect(null, actions)(withStyles(styles)(PostForm))