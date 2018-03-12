import './App.css'

import { Client } from 'boardgame.io/react'

import Game from './game'
import Board from './components/board'

const App = Client({
  game: Game,
  board: Board,
  debug: process.env.NODE_ENV === 'development',
  enhancer:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
})

export default App
