const createOfferHandler = async (event) => {
  
  event.preventDefault();

  // TODO: Add a comment describing the functionality of these expressions
  const offered_shift = document.querySelector('#shiftOffer').value.trim();
  const wanted_shift = document.querySelector('#shiftWanted').value.trim();

  if (offered_shift && wanted_shift) {

    // TODO: Add a comment describing the functionality of this expression
    const response = await fetch('/api/offers/', {
      method: 'POST',
      body: JSON.stringify({ offered_shift, wanted_shift }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create new offer');
    }

  }
};

document
  .querySelector('#swap-form')
  .addEventListener('submit', createOfferHandler);
