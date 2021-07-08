import { React, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import "./NewBoard.css"

const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTION, PUT, PATCH"
};

const NewBoard = (props) => {
    const [ hidden, setHidden ] = useState(false);
    const [ title, setTitle ] = useState('');
    const [ owner, setOwner ] = useState('');
    
    const toggleHidden = () => {
        setHidden(hidden ? false : true);
    }

    const submitNewBoard = (event) => {
        event.preventDefault();

        props.onFormSubmit({title, owner});

        setTitle('');
        setOwner('');
    }

    return (
        <section className='new-board-form__form'>
            <div>
                <form onSubmit={submitNewBoard}
                    className={hidden === true ? "invisible" : "visible"}>
                    <p>Title:
                    <input 
                    type='text' 
                    name='title'
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} /></p>

                    <p>Owner's Name:
                    <input
                    type='text' 
                    name='owner'
                    value={owner} 
                    onChange={(e) => { setOwner(e.target.value) } } /></p>

                    <input 
                    className='new-board-form__form-submit-btn'
                    value='submit'
                    type='submit' 
                    disabled={((title.length === 0) || (owner.length === 0) || (title.length > 40) || (owner.length > 40))}/>

                    <p>Preview: {title} - {owner}</p>
                </form>
            </div>

            <button onClick={toggleHidden}className='new-board-form__toggle-btn'>Hide</button>
        </section>

    );

}

export default NewBoard;