import { useEffect, useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

import './App.css'


function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });



   // Save tasks to local storage
   useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
   },[tasks])



 
 

  return (
    <>
     <div className="min-h-screen flex flex-col items-center p-5 bg-gray-100">
      <h1 className="text-3xl font-bold mb-5  mt-10">To-Do List</h1>
      <TaskInput setTasks={setTasks}  />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
    </>
  )
}

export default App
