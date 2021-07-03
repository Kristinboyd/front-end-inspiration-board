import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import CardsList from './components/CardsList';
import NewBoardForm from './components/NewBoardForm';
import Board from './components/Board';

function App() {
  //UsseState is initializing a state object with a default empty array and using array destrcuting to name the variables we want out of this object
  //boardsData is the current State
  //set boards data is a function reference used to update the state
  const [boardsData, setBoardsData] = useState([]);
  //selected board contains a copy of the data for a board, to point at what is the active board out of the board's data State object
  //be careful that these are in step so I don't select a board that doesn't exist
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '',
    board_id: null
  });
 
  //useEffect means to do something when it has a "side affect" or do something when it's done, it is a tool for making asynchronous calls for instance as we do here
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
    }).then((response) => {
      setBoardsData(response.data);
    })
  }, []);
  //^^ to-do: track down why we use empty list as a parameter out of Learn*****************

  //this is a function we call to tell which board we want to make active
  //is used as a helper function for line 36; make sure Kristin doesn't "copy" this pattern, maybe just name the function how we want the first time
  const selectBoard = (board) => { setSelectedBoard(board) };

    // methinks boardsData is automatically called by the useState hook black magic whenever the api fetches data or boardsData is otherwise changed
  const boardsElements = boardsData.map((board) => {
    return (<li>
      <Board board={board} onBoardSelect={selectBoard}></Board>
    </li>) // is the Board component rendering anything other than a "menu item"? If so, Board is a poor name for the component. (Seen below: yes this should be named something like BoardMenuItem / BoardName)
  });

  const createNewBoard = (newBoard) => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoard).then((response) => {
      // response.status == 200? 500? or even something like response.data.errors != []
      console.log("Response:", response.data.board);
      const boards = [...boardsData]; // make a copy of boardsData state object
      boards.push(response.data.board); // appending the new board data as returned by the server/api
      setBoardsData(boards); // updating our client-side state - {}'s that represent each board
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t create a new board.');
    });
  }

  // css alone wouldn't know when to show/hide the form, but may be used to show and hide the form
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  const toggleNewBoardForm = () => {setIsBoardFormVisible(!isBoardFormVisible)}

  // well that escalated quickly!
  const deleteAll = () => {
    if (window.confirm('Are you really sure? Please be gentle with this demo.')) {
      axios.delete(`${process.env.REACT_APP_BACKEND_URL}/destroy_all`).then((response) => {
        console.log('response', response.data);
        setBoardsData([response.data.default_board]);  // we don't need / nor should we define a default array with a default board in it because the server returns that when we /destroy_all
        // next we blank out the state that contains the currently selected board because that board just got deleted and no longer exists
        setSelectedBoard({
          title: '',
          owner: '',
          board_id: null 
        });
      }).catch((error) => {
        console.log('Error:', error);
        alert('Something went wrong! :(');
      });
    }
  }

  return (
    <div className="page__container">
      <div className="content__container">
        <h1>Inspiration Board</h1>
        <section className="boards__container">
          <section>
            <h2>Boards</h2>
            <ol className="boards__list">
              {boardsElements}
            </ol>
          </section>
          <section>
            <h2>Selected Board</h2>
            <p>{selectedBoard.board_id ? `${selectedBoard.title} - ${selectedBoard.owner}` : 'Select a Board from the Board List!'}</p>
          </section>
          <section className='new-board-form__container'>
            <h2>Create a New Board</h2>
            {isBoardFormVisible ? <NewBoardForm createNewBoard={createNewBoard}></NewBoardForm> : ''} {/* no css involved! when true is renders the NewBoardForm with a default empty board object, when false renders nothing (empty string). this is a common pattern */}
            <span onClick={toggleNewBoardForm} className='new-board-form__toggle-btn'>{isBoardFormVisible ? 'Hide New Board Form' : 'Show New Board Form' /* ternary operator! */ }</span>
          </section>
        </section>
        {selectedBoard.board_id ? <CardsList board={selectedBoard}></CardsList> : '' /* if we have selected a board then display its cards */}
      </div>
      <footer><span>This is a demo! Please be gentle!</span> Click <span onClick={deleteAll} className="footer__delete-btn">here</span> to delete all boards and cards!</footer>
    </div>
  );
}

export default App;
