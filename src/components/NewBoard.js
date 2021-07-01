import { React, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import "./NewBoard.css"

//constant headers is maybe looking for a workaround on something that is possibly not working? looking at fixes on backend and looks like it was an issue with browser? could refactor before deployment
// const headers = {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "POST, GET, OPTION, PUT, PATCH"
// }

const NewBoard = (props) => {
    const [ hidden, setHidden ] = useState(false);
    const [ title, setTitle ] = useState(''); //possible opportunity to refactor; these 
    const [ owner, setOwner ] = useState(''); //could be part of an object
    
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
                    className={hidden === true ? "invisible" : "visible"}> {/* would prefer to not do this in css if we don't have to; can we do it where it doesn't render like how simon did? trade offs: impact performance? idk which is better*/ }
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