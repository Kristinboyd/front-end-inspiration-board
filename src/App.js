import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import CardsList from './components/CardsList';
import NewBoardForm from './components/NewBoardForm';
import Board from './components/Board';

const BACKEND_URL = 'http://localhost:5000/boards';

function App() {
  const [boards, setBoards] = useState([])
  const [selectedBoard, setSelectedBoard] = useState({
      title: '',
      owner: '',
      board_id: null
  });



  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}




export default App;
