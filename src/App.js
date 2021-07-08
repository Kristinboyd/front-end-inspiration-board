// edited

import './App.css';

import { React, useEffect, useState } from 'react';
import NewBoard from './components/NewBoard.js';
import BoardDisplay from './components/BoardDisplay.js';
import Board from './components/Board.js';
import axios from 'axios';

function App() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    'board_id': null,
    'title': '',
    'owner': ''
  });

  const onClickBoard = (selected) => {
    setSelectedBoard(selected);
  }

  const boardsElements = boards.map((board) => {
    console.log("Invoked to render boards");
    return (<li>
      <BoardDisplay key={board.board_id} onClickBoard={onClickBoard} board={board}></BoardDisplay>
    </li>)
  });

  useEffect(() => {
    axios.get("https://wm-inspo-board.herokuapp.com/boards", {
    }).then((response) => {
      setBoards(response.data);
    })
  }, []);

  const onFormSubmit = (newBoard) => {
    axios.post("https://wm-inspo-board.herokuapp.com/boards", newBoard).then((response) => {
      const currentBoards= [...boards];
      currentBoards.push(response.data);
      setBoards(currentBoards);
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t create a new board.');
    });
  }

  return (

    <section className='App'>
      <header id='header'>
        <h1>WaterMelon Mustard: Inspiration Board!</h1>
        
        <div>

          <h2>Create a New Board</h2>
          <NewBoard onFormSubmit={onFormSubmit} />

        </div>
        <div>
          <h2>Existing Boards</h2>
          <ol className='boards__list'>
            {boardsElements}
          </ol>
        </div>
      </header>
      
      <div>
      <h2>{selectedBoard.board_id ? `${selectedBoard.title} - ${selectedBoard.owner}` : "Select a board!"}</h2>

      {selectedBoard.board_id ? <Board key={selectedBoard.board_id} board={selectedBoard}></Board> : ''}
      </div>
    </section>
  );
}

export default App;