import Header from '../src/components/Header'
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor Appointment',
        day: '1/1/2021',
        reminder: true,
    },
    {
        id: 2,
        text: 'Doctor Appointment',
        day: '1/1/2021',
        reminder: true,
    },
    {
        id: 3,
        text: 'Doctor Appointment',
        day: '1/1/2021',
        reminder: false,
    }
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
