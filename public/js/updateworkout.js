// document.getElementById('workout-form').addEventListener('submit', async function(event) {
//     event.preventDefault(); 
   

// const date = document.getElementById('date').value;
// const workoutmins = document.getElementById('workoutmins').value;
// const workouttype = document.getElementById('workouttype').value;

//     try {
//         const response = await fetch('/api/add', {
//             method: 'POST',
//             body: JSON.stringify({ date, 
//                 workoutmins, 
//                 workouttype }),
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         });
//     } catch (error) {
//         console.error('Error adding workout:', error);
//     }
// });

const newFormHandler = async function(event) {
    event.preventDefault();
  
    const date = document.querySelector('input[name="date"]').value;
    const workout_minutes = document.querySelector('input[name="workoutmins"]').value;
    const workout_type = document.querySelector('input[name="workouttype"]').value;
  
    await fetch('/api/add/add/', {
      method: 'POST',
      body: JSON.stringify({
        date,
        workout_minutes,
        workout_type,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
    .then (function(error) {
      console.log(error)
    });
  
    document.location.replace('/workouts');
  };
  
  document
    .querySelector('#workout-form')
    .addEventListener('submit', newFormHandler);
  