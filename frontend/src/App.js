// import React, { useState } from 'react';

// function App() {
//     const [workout, setWorkout] = useState(null);

//     const fetchWorkout = async () => {
//         try {
//             const response = await fetch('http://backend:8000/workout');
//             const data = await response.json();
//             setWorkout(data);
//         } catch (error) {
//             console.error('Error fetching workout:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Nextlevel Workouts</h1>
//             <button onClick={fetchWorkout}>Get Workouts</button>
//             {
//                 workout && (
//                     <div>
//                         <h2>Workout Details</h2>
//                         <p>{workout.name}</p>
//                         <p>{workout.descriptoin}</p>
//                     </div>
//                 )
//             }
//         </div>
//     )
// }

// export default App;

import React from 'react';

function App() {
  return (
    <div>
      <h1>Welcome to NextLevel</h1>
    </div>
  );
}

export default App;
