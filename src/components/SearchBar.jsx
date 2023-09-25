// search for specific player, shows new list of players with matching names
import { useState, useEffect } from 'react'
import { APIcall } from '../API';

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [puppies, setPuppies] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    async function handleSearch () {
      const puppies = await APIcall()
      
        if(puppies) {
          setPuppies(puppies.data.players)
        } else {
          console.warn(error)
        }
      }
      handleSearch()
    }, [])



  const searchedPlayer = query ? puppies.filter((puppy) => puppy.name.toLowerCase().includes(query)) : puppies

  return(
    <div id='search-page-div'>
      <label>
        <input id='search-input' type='text' placeholder='Search current players!' value={query} onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
      </label>
      <div id='search-results'>
        {searchedPlayer.length === 0 ? (
          <p>No puppies found!</p>
        ) : ( 
          searchedPlayer.map((puppy) => {
            return <h3 key={puppy.id}>{puppy.name}</h3>
          })
        )
      }
      </div>
    </div>
  )
}