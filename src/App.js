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
      <BoardDisplay onClickBoard={onClickBoard} board={board}></BoardDisplay>
    </li>)
  });

  useEffect(() => {
    axios.get("http://localhost:5000/boards", {
    }).then((response) => {
      setBoards(response.data);
    })
  }, []);

  const onFormSubmit = (newBoard) => {
    axios.post("http://localhost:5000/boards", newBoard).then((response) => {
      const currentBoards= [...boards];
      currentBoards.push(response.data);
      setBoards(currentBoards);
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t create a new board.');
    });
  }

  return (

    <section>
      <header className='header'>
        <h1>Inspiration Board!</h1>
      </header>

      <h2>Boards</h2>
      <ol>
        {boardsElements}
      </ol>

      <hr />

      <h2>Create a New Board</h2>
      <NewBoard onFormSubmit={onFormSubmit} />

      <hr />

      <h2>Selected Board</h2>
      <p>{selectedBoard.board_id ? `${selectedBoard.title} - ${selectedBoard.owner}` : "Select a board!"}</p>
      
      <hr />

      {selectedBoard.board_id ? <Board board={selectedBoard}></Board> : ''}
    </section>
  );
}

export default App;