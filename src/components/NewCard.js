import { React, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import "./NewCard.css";

const NewCard = (props) =>{
    const [cardMessage, setCardMessage] = useState('');

    const handleMessageChange = (e) => { setCardMessage(e.target.value) };

    const submitNewCard = (changeEvent) => {
        changeEvent.preventDefault();
        props.createNewCard(cardMessage);
        setCardMessage('');
    }

    return (
        <section className= 'new-card-form__form-text-area'>
            <div>
                <h2>Create a New Card </h2>
                <form onSubmit={submitNewCard} className='new-card-form__form'>
                    <input 
                    type='text' 
                    name='text'
                    className={
                        cardMessage.length === 0 || cardMessage.length > 40
                          ? "invalid-form-input"
                          : ""
                      }
                    value={cardMessage} 
                    placeholder='type here!'
                    onChange={handleMessageChange} />

                    <input 
                    className='new-card-form__form-button'
                    disabled={cardMessage.length === 0 || cardMessage.length > 40}
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