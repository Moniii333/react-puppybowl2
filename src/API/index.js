const cohortName = '2306-FTB-WEB-PT';
const apiUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;
const allPuppies = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

const APIcall = async () => {
  try {
    const response = await fetch(`${allPuppies}`);

    return await response.json();
  } catch (error) {
    console.info('APIcall fetch error');
  }
};

const enterPuppy = async (formData) => {
  try {
    if (!formData || !formData.name || !formData.breed) {
      throw new Error('Invalid formData');
    }
    const response = await fetch(`${allPuppies}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

const getDetails = async (id) => {
  try {
    const selectedPup = await fetch(`${apiUrl}/players/${id}`);
    const pup = await selectedPup.json();
    return pup;
  } catch (error) {
    console.warn(error);
  }
};

const removePuppy = async (id) => {
  try {
    const deletedPup = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-WEB-PT/players/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const removed = await deletedPup.json();
    console.log(removed);
  } catch (err) {
    console.error('Unable to remove player!', err);
  }
};
const handleRemoval = (e) => {
  const selectedPupCard = e.target.closest('.pup-card');
  if (e.target.classList.contains('remove-puppy')) {
    const pupId = e.target.getAttribute('data-id');

    // might remove from api
    removePuppy(pupId);
    if (selectedPupCard) {
      selectedPupCard.remove();
    }
  }
  console.log('removal successful!');
};

export { APIcall, removePuppy, getDetails, handleRemoval, enterPuppy };
