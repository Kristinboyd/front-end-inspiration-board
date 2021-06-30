import { useState } from 'react';
import React from 'react';
import './NewBoardForm.css';

const NewBoardForm = (props) => {

    const [title, setTitle] = useState('');
    const [owner, setOwner] = useState('');

    const submitNewBoard = (e) => {
        e.preventDefault();
        props.createNewBoard({ title, owner });
        setTitle('');
        setOwner('');
    };


    return (
        <div class ='new-board-container'>
            <h2>Create a new board!</h2>
            <form onSubmit={submitNewBoard} />
        </div>
    )
    }
    export default NewBoardForm;