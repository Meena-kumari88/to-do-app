import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, setTasks}) => {
  return (
    <div className="w-96 mt-5 bg-yellow-100 p-2 rounded shadow max-h-[100vh] overflow-y-auto">
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </ul>
  </div>
  
  )
}

export default TaskList
