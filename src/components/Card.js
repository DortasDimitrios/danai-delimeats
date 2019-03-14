
import React from 'react';
import '../styles/Card.css';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, img, } = property;
    return (
        <div id={`card-${index}`} className="card" 
       style= {{backgroundImage: `url(${img}`}}
        >
            
            {/* <h4 className="code">{code} </h4> */}
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;

