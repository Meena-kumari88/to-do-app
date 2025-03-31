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
      <li className="flex justify-between items-center p-2 mb-2 border rounded bg-white shadow">
        <span className={task.completed ? 'line-through text-gray-500' : ''}>
          {task.text}
        </span>
        <div className="space-x-2">
          <button onClick={toggleComplete} className="text-green-500 cursor-pointer">{task.completed?'Completed':'Complete'}</button>
          <button onClick={deleteTask} className="text-red-500  cursor-pointer">Delete</button>
        </div>
      </li>
    );
  };
  
  export default TaskItem;
  