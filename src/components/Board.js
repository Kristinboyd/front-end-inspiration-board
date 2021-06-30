//Kristin: this is basically a mirror of the card I had seen on your github! added some features specific to board
// questions to respect of requirements at end...
//for app: All error messages can look like a new section on the screen, a red outline around the input field, and/or disabling the input, as long as it's visible
import PropTypes from 'prop-types';
import { useState } from 'react';
import './Board.css'//this import obvi may need to change
const Board = (props) => {
        const onBoardSubmit = () => {
            const defaultInspo = {
                id: props.id,
                title: props.title,
                owner: props.owner
            };
            props.onSubmit(defaultBoard);
        }
        return(
            <div>
                <ul>
                <li className='board-item__owner'>{props.board.owner}: <span className='board-item__title'>{props.board.title} </span> </li>
                </ul>
                <button onSubmit={onBoardSubmit}>Submit</button>
            </div>
        );
};
Board.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired, 
    owner: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
export default Board;
//See an error message if I try to make a new board with an empty/blank/invalid/missing "title" or "owner" input. ooft how tho, one goal for today, didn't come to me