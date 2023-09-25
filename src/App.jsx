import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import AllPlayers from './components/AllPlayers'
import Home from './components/Home'
import SearchBar from './components/SearchBar'
import CreatePlayer from './components/CreatePlayer'
import Nav from './components/Nav'

function App() {
  const [players, setPlayers] = useState([])

  const passedPuppyData = (data) => {
    setPlayers(data)
  }

  return (
    <div id='container'>
      <Nav />
      <div id='show-section'>
        <Routes>
          <Route path='/' exact element={ <Home /> } />
          <Route path='/allplayers' element={ <AllPlayers passedFunction={passedPuppyData} passedInfo={players} /> } />
          <Route path='/searchbar' element={ <SearchBar /> } />
          <Route path='/createplayer' element={ <CreatePlayer /> } />
        </Routes>
      </div>
    </div>
  )
}

export default App
