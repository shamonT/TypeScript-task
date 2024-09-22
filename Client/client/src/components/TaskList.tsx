import React from 'react';
import { Task } from '../features/taskSlice';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p>No tasks available</p>;
  }

  return (
    <div className="task-list">
      <h3>Your Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span> - <span>{new Date(task.dueDate).toLocaleDateString()}</span>
            {task.completed ? <span> - Completed</span> : <span> - Pending</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
