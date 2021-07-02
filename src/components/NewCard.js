// edited 

import { React, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import "./NewCard.css";

const NewCard = (props) =>{
    const [cardMessage, setCardMessage] = useState("");

    const handleMessageChange = (e) => { setCardMessage(e.target.value) };

    const submitNewCard = (changeEvent) => {
        changeEvent.preventDefault();
        props.createNewCard(cardMessage);
        setCardMessage("");
    }

    return (
        <section>
            <div className='new-card-form__form-text-area'>
                <h4>Create a New Card</h4>
                <form onSubmit={submitNewCard}>
                    <input 
                    type='text' 
                    name='text'
                    value={cardMessage} 
                    placeholder="add message here!"
                    onChange={handleMessageChange} />

                    <input 
                    className='new-card-form__form-button'
                    value='add message'
                    type='submit' />
                </form>
            </div>
        </section>

    );

};

NewCard.propTypes = {

    // nextId: propTypes.number.isRequired,
    createNewCard: propTypes.func.isRequired,

};


export default NewCard;


// no props passed in
// state: holds information prior to submit
// form handling: sends state to API