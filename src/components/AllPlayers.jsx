import React, { useState, useEffect } from 'react';
import { APIcall, handleRemoval } from '../API';

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const allPuppies = await APIcall()

      if(allPuppies) {
        setPlayers(allPuppies.data.players)
      } else {
        console.warn('all players component failed to fetch')
      }
    }

    fetchData()
  }, []);


  return (
    <div className='all-pups-div'>
      <h1 id='all-pups-h1'>Current puppies playing this year!</h1>
      <div className='reg-players'>
        {players.map((puppy) => (
          <div className='pup-card' key={puppy.id}>
            <p key={puppy.id}>{puppy.name}</p>
            <img src={puppy.imageUrl} alt={'picture of ' + puppy.name} />
            <button data-id='data-pup-id' onClick={() => setShowDetails((prev) => (prev === puppy.id ? null : puppy.id))
            } className='details-btn'>
              Toggle Details
            </button>
            {showDetails === puppy.id && (
              <span>
                <p>{puppy.breed}</p>
                <p>Position: {puppy.status}</p>
                <p>Team # {puppy.teamId ? puppy.teamId : 'Currently benched'}</p>
              </span>
            )}
            <button onClick={handleRemoval} className='remove-puppy' data-id={puppy.id} >Remove</button>
          </div>
        ))}
      </div>
    </div>
  )}