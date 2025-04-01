import React,{useState, useEffect} from 'react'

const TaskInput = ({setTasks}) => {
    const [task, setTask] = useState('')

    const addTask = () =>{
        if (task.trim() === '') return
        setTasks((prev) => [...prev, { id: Date.now(), text: task, completed: false }]);
        setTask('')
    }
  return (
    <div className=''>
        <input 
         type='text' 
         value={task} 
         onChange={(e) => setTask(e.target.value)}
         className='border border-gray-300 p-2 w-full max-w-sm md:w-96' 
         placeholder='Add a task...' 
        />
        <button className='bg-blue-500 text-white p-2 w-full mt-2 sm:w-auto sm:mt-2 sm:ml-0 md:ml-2 cursor-pointer' onClick={addTask}>Add</button>
    </div>
  )
}

export default TaskInput
