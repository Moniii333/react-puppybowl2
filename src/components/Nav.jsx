import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {

  return(
    <nav className='navbar'>
      <NavLink to='/' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } style={({ isActive }) => {return{color: isActive ? '#A6F6FF' : '', fontSize: isActive ? '24px' : '18px'}}}>Home</NavLink>
      <NavLink to='/AllPlayers' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } style={({ isActive }) => {return{color: isActive ? '#A6F6FF' : '', fontSize: isActive ? '24px' : '18px'}}}>Current Players</NavLink>
      <NavLink to='/CreatePlayer' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } style={({ isActive }) => {return{color: isActive ? '#A6F6FF' : '', fontSize: isActive ? '24px' : '18px'}}}>Enter your pup</NavLink>
      <NavLink to='/SearchBar' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } style={({ isActive }) => {return{color: isActive ? '#A6F6FF' : '', fontSize: isActive ? '24px' : '18px'}}} ><FontAwesomeIcon icon={faSearch} /></NavLink>
    </nav>
  )
}