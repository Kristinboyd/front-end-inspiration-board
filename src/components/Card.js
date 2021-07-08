import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./Card.css"

const Card = (props) => {
    return (
        <div className='card'>
            <div className='card-item'>
                <p className='card__content-text'>{props.text}</p>
            </div>
            
            <div className='card__delete'>
                <button className='card-item__controls'
                onClick={() => props.deleteCard(props.id)}>
                    Delete
                </button>
            </div>
            <div className='card__like'>
                <button className='card-item__controls'
                onClick={() => props.likeCard(props.id) }>
                    {(props.likes > 0) ? `${props.likes} Likes` : "Like"} {/*the likes are getting stored in the database but props.likes is still NaN*/}
                </button>
            
            </div>
        </div>
    );
}

Card.propTypes = {
        id: PropTypes.number,
        text: PropTypes.string,
        deleteCard: PropTypes.func.isRequired,
        likeCard: PropTypes.func.isRequired,
        likes: PropTypes.number
}


export default Card;