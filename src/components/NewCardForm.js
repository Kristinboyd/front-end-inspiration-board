import PropTypes from 'prop-types';
import { useState } from 'react';
import './Card.css'//this import obvi may need to change

const Card = (props) => {
    const onCardSubmit = () => {
        const defaultInspo = {
            id: props.id,
            placeHolder: props.text,
            whoseBoard: props.boardGroup,
            inspoName: props.name
        };
        //from Ada's description: this invokes the function passed in through the prop named "addInspoCard"
        //we will reference it in App as updateBoardInspos
        props.onSubmit(defaultInspo);
        //should onChange be called do you think? maybe want to use onClick?
    }
    //in the return below is that where we want to have a like button possibly? 
    //is this even where we want to have this button?
    return(
        <div>
            <ul>
                <li className={nameColor}> Inspo Title: {props.name}</li>
                <li>Wise Words: {props.text}</li>
            </ul>
            <button onClick={onCardSubmit}>Submit {props.name} to {props.boardGroup}</button>
        </div>
    );
};
Card.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired, 
    boardGroup: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
export default Card;
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
