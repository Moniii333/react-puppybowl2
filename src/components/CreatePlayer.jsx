// create new player, adding to all players list
import { useState } from "react";
import { enterPuppy } from "../API";

export default function CreatePlayer() {
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
  });

  const handleFormChanges = (event) => {
    const fieldName = event.target.name
    const fieldValue = event.target.type === 'file' ? event.target.files[0] : event.target.value

    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue,
    }));
  }
  
  const handleForm = async (e) => {
    e.preventDefault()
    

    try {
      const response = await enterPuppy(formData);

      if(response) {
        console.log('Form sent to API successfully!',response);
      }
    } catch (err) {
      console.error('Error submitting form!',err);
    }
  }

  return(
    <div className="form-page-div">
      <h1 className="form-h1">Join this years puppy bowl!</h1>
      <p className="form-p">Welcome to the Puppy Bowl registration! 
        Do you believe your pup has what it takes to steal hearts and win the title of the cutest pup of the year? 
        Fill out the form below to enter your adorable fur baby into this year's Puppy Bowl competition. 
        It's time to see puppies battle it out in an epic showdown of cuteness. 
        May the fluffiest, most endearing pup emerge victorious!</p><br></br>
      <div className="form-container">
      <form onSubmit={handleForm} method="POST">
        <label id='name'>Puppy's name: 
          <input type="text" name="name" autoComplete="name" value={formData.name} onChange={handleFormChanges} required placeholder="Puppy's name?" className="top-input" />
        </label>
        <br></br>
        <label id='breed'>Breed: 
          <input type="text" name="breed" value={formData.breed} onChange={handleFormChanges} required placeholder="Puppy's breed?" className="bottom-input" />
        </label>
        <br></br>
        <input type="submit" value={'Join Puppy Bowl!'} className="form-btn" />
      </form>
      </div>
    </div>
  )
}