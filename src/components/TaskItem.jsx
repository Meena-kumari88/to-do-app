const TaskItem = ({ task, setTasks }) => {
    const toggleComplete = () => {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === task.id ? { ...t, completed: !t.completed } : t
        )
      );
    };
  
    const deleteTask = () => {
      setTasks((prev) => prev.filter((t) => t.id !== task.id));
    };
  
    return (
      <li className="flex flex-wrap  flex-col justify-between items-center p-2 mb-2 border rounded bg-white shadow">
      <span className={`min-w-0 flex-1  ${task.completed ? 'line-through text-gray-500' : ''}`}>
        {task.text}
      </span>
      <div className="flex  space-x-2 mt-4 sm:mt-0">
        <button onClick={toggleComplete} 
         className={`px-4 py-2 rounded-lg font-medium text-white cursor-pointer transition duration-300 ${
          task.completed 
            ? 'bg-green-400 hover:bg-green-500' 
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
        >
          {task.completed ? 'Completed' : 'Complete'}
        </button>
        <button onClick={deleteTask} className="px-4 py-2 rounded-lg font-medium text-white bg-red-500 hover:bg-red-600 transition duration-300 cursor-pointer">Delete</button>
      </div>
    </li>
    
    );
  };
  
  export default TaskItem;
  