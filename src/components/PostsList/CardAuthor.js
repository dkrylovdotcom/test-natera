import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from "@material-ui/core"

const CardAuthor = (props) => {
    const classes = styles()
    const { name, image, role } = props

    return (
        <div className={classes.wrap}>
            <div>
            <img className={classes.image} src={image} alt="" />
            </div>
            <div>
                <div className={classes.name}>
                    {name}
                </div>
                <div className={classes.role}>
                    {role}
                </div>
            </div>
        </div>
    )
}

const styles = makeStyles(() => ({
    wrap: {
        display: 'flex',
        padding: '0 22px'
    },
    image: {
        marginRight: '10px',
        borderRadius: '100%'
    },
    name: {
        fontSize: '14px',
        fontFamily: 'Montserrat',
        color: '#192A3E',
        marginBottom: '5px'
    },
    role: {
        fontSize: '11px',
        fontFamily: 'Montserrat',
        color: '#90A0B7',
        letterSpacing: '0.01em'
    }
}))

CardAuthor.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
}

export default CardAuthor