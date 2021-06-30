import { React, useEffect, useState } from 'react';
import proptype from 'prop-types';
import axios from 'axios';


const NewBoard = () => {
    const [ hidden, setHidden ] = useState(false);
    const [ title, setTitle ] = useState('');
    const [ owner, setOwner ] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();

        // figure out CORS here
        
    }
}

    return (
        <section className="new-boardform">
            <div>
                <h4>New Boards</h4>
                <form onSubmit={onFormSubmit}>
                    <p>Title</p>
                    <input 
                    type='text'
                    name='title'
                    value={title}}
                    onChange={(e) => setTitle(e.target.values)} />

                    <p>Owner's Name</p>
                    <input 
                    type='text'
                    name='owner'
                    value={owner}}
                    onChange={(e) => setOwner(e.target.values)} />

                    <input
                    className='form-submit-button'
                    value='submit'
                    
                </form>
            </div>
        </section>
    )