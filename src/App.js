import './App.css';

import Client from 'boardgame.io/client';

import Game from './game';
import Board from './components/board';

const App = Client({
  game: Game,
  board: Board,
});

export default App;
