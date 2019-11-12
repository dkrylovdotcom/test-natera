import React from 'react';
import PropTypes from 'prop-types'
import SlideUI from '@material-ui/core/Slide';


const Slide = (props) => {
    const { visible } = props

    return (
        <SlideUI direction="up" in={visible}>
            {props.children}
        </SlideUI>
    );
}

Slide.propTypes = {
    visible: PropTypes.bool
}

export default Slide