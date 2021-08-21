const createShiftHandler = async (event) => {
  
  event.preventDefault();

  // TODO: Add a comment describing the functionality of these expressions
  const start_date = document.querySelector('#startDate').value.trim();
  const end_date = document.querySelector('#endDate').value.trim();

  if (startDate && endDate) {

    // TODO: Add a comment describing the functionality of this expression
    const response = await fetch('/api/shifts/', {
      method: 'POST',
      body: JSON.stringify({ start_date, end_date }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create new shift');
    }

  }
};

document
  .querySelector('#create-shift')
  .addEventListener('submit', createShiftHandler);
