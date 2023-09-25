// user clicks details btn for each player, goes to different page
// to show details of that player
export default function Details({ passedInfo }) {
  console.log('passed props', passedInfo)

  const tricks = [' Sit', ' Roll Over', ' Play Dead', ' Shake', ' Spin', ' Bow', ' Jump']
  const likes = [' Dirty Socks', ' Bones', ' Peanut Butter', ' Chicken', ' Cuddles', ' Sticks', ' Treats']
  const dislikes = [' Baths', ' Mailman', ' Strange Men', ' Vet', ' Vacuum', ' Being Alone', ' Thunder']

  const choseTricks = () => {
    const y = 5
    let shuffled = tricks.sort(function(){ return 0.5 - Math.random() })
    let selected = shuffled.slice(0, y)
    return(selected.toString())
  }

  const choseLikes = () => {
    const y = 6
    let shuffled = likes.sort(function(){ return 0.5 - Math.random() })
    let selected = shuffled.slice(0, y)
    return(selected.toString())
  }

  const choseDislikes = () => {
    const y = 3
    let shuffled = dislikes.sort(function(){ return 0.5 - Math.random() })
    let selected = shuffled.slice(0, y)
    return(selected.toString())
  }

  return (
    <div id="details-div">
      <h1>Selected Puppy's Details</h1>
      <p>Picture: Loading...</p>
      <p>Breed: Loading...</p>
      <p>Status: Loading...</p>
      <p>Team Id: Loading...</p>
      {/* below will be not in api just to have extra info */}
      <p>Tricks: {choseTricks()}</p>
      <p>Likes: {choseLikes()}</p>
      <p>Dislikes: {choseDislikes()}</p>
    </div>
  )
}