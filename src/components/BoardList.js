import { useState } from 'react';
//Create a new board, by filling out a form. The form includes "title" and "owner" name of the board.
//for css, probably should have additional button on the header in return with it's own onclick event:
//Hide the "New Board" form, so I don't have to see the "New Board" form all the time when I'm looking at cards.
const NewBoardForm = (props) => {
    const [board, setNewBoard] = useState('');
    const handleBoardChange = (event) => { setNewBoard(event.target.value) };
    const submitNewBoard = (event) => {
    e.preventDefault();
    props.postNewCard(board);
    setNewBoard('');
    };
//note to self: on line 22 I'm not sure what submitnewBoard is refering to yet, make sure to build that function out specific to Board
//adapted this board form to kristin's card form will need to make sure I add "owner" part
    return (
    <section className="new-board-form__container">
        <h2>Submit a New Board</h2>
        <form onSubmit={submitNewBoard} className="new-board-form__form"> 
        <label>Board Title:</label>
        <input
            type="text"
            className={
            board.length === 0 || title.length > 10
                ? "invalid-form-input"
                : ""
            }
            onChange={handleBoardChange}
            value={board(newBoard)}
        ></input>
        <p>Preview: {title}</p>
        <input
            type="Submit"
            disabled={message.length === 0 || message.length > 10}
            className="new-board-form__form-submit-btn"
        ></input>
        </form>
    </section>
    );
};
export default NewBoardForm;