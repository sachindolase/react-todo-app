import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEditTask = (id, updatedTask) => {
    dispatch(editTask(id, updatedTask));
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <span>{task.text}</span>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          <button onClick={() => handleEditTask(task.id, prompt("Edit task:", task.text))}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
