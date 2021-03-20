import Header from '../src/components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'

import { useState, useEffect } from 'react';

function App() {
  const [showAddTask,setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Đi học',
        day: 'Sáng thứ 7 ngày 2 tháng 2',
        reminder: true,
    },
    {
        id: 2,
        text: 'Đi chơi',
        day: 'Chiều thứ 7 ngày 2 tháng 2',
        reminder: true,
    },
    {
        id: 3,
        text: 'Đi ngủ',
        day: 'Tối thứ 7 ngày 2 tháng 2',
        reminder: false,
    },
  ]);

  // useEffect data
  useEffect( () => {
    fetchData();
  },[])

  // fetch data from db json
  const fetchData = async () => {
    const res = await fetch("https://my-json-server.typicode.com/trandinhthang/mockjson/db");
    const data = await res.json();
    console.log(data);
    return data;
  }

  // Add Task 
  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random() *10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask ]);
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks( tasks.filter( (task) => task.id !== id ))
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id);
    //code
  }

  return (
    <div className="container">
      <Header onAdd={ () => setShowAddTask(!showAddTask)} showAdd={showAddTask } />
      {showAddTask && <AddTask  onAdd={ addTask} />}
      { tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task"
      )}
    </div>
  );
}

export default App;
