import PropTypes from 'prop-types';
import { useState } from 'react';
import './Card.css'//this import obvi may need to change


//this is a controlled form for every input(might want to put it in a new file?), 
//everytime it handles an event, it update's the component's state
//this code was referenced from controlled forms in our lessons so I hope it isn't too 
//buggy syntactially but we maybe need to rename some fields? 

const NewCardForm = () => {
    const [formFields, setFormFields] = useState({
        name: '',
        text: '',
        boardGroup: '' //thinking this will be default bc they will be picking the so it should autopopulate
    });
    const onNameChange = (event) => {
        setFormFields({
            //below is use of spreader syntax from lightnin talks
            ...formFields,
            name: event.target.value
        })
    };
    const onTextChange = (event) => {
        setFormFields({
            ...formFields,
            text: event.target.value
        })
    };
    const whoseBoardChange = (event) => {
        setFormFields({
            ...formFields,
            boardGroup: event.target.value
        })
    };
    return (
        <form className="cardInspoForm">
            <div>
                <label htmlFor="inspoTitle">Title:</label>
                <input
                    name="inspoTite"
                    value={formFields.name}
                    onChange={onNameChange} />
            </div>
            <div>
                <label htmlFor="inspoText">Wise Words:</label>
                <input name="text"
                value={formFields.text}
                onChange={onTextChange} />
            </div>
            <input type="sumbit" value="Submit Inspo?" />
        </form>
    );
};

export default NewCardForm;
