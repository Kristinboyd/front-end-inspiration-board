// edited 

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
        <section className="new-board-form">
            <div>
                <h4>New Board</h4>
                <form onSubmit={submitNewBoard}
                    className={hidden === true ? "invisible" : "visible"}>
                    <p>Title</p>
                    <input 
                    type='text' 
                    name='title'
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} />

                    <p>Owner's Name</p>
                    <input
                    type='text' 
                    name='owner'
                    value={owner} 
                    onChange={(e) => { setOwner(e.target.value) } } />

                    <input 
                    className='form-submit-button'
                    value='submit'
                    type='submit' />

                    <p>Preview: {title} - {owner}</p>
                </form>
            </div>

            <button onClick={toggleHidden}>Hide</button>
        </section>

    );

}

export default NewBoard;