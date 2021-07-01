import { useState } from 'react';


 const NewCardForm = (props) => {
     const [inspoText, setInspoText] =useState('');
     const onNewInspo = (card) => { setInspoText(card.target.value) };

     const addCardtoBoard = (card) => {
        card.preventDefault();
        props.postNewCard(message);
        setInspoText('');
      };

    return (
        <form className="card-inspo-form_form" onSubmit={addCardtoBoard}>
            <div>
                <label>Wise Words:</label>
                <input
                    type="text"
                    value={inspoText}
                    onChange={onNewInspo} 
                    className={
                        inspoText.length === 0 || inspoText.length > 40
                        ? "invalid-form-input"
                        : "" 
                    }/>
                <p>{inspoText}</p>
            </div>
            <div>
            <input 
                type="Sumbit" 
                disabled={inspoText.length === 0 || inspoText.length > 40}
                className="new-card-form__form-submit-bttn" />  
            </div>
        </form>
    );
};

export default NewCardForm;
