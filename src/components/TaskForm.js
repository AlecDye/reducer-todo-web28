import React, { useState, useReducer } from "react";

import { taskReducer, initialState } from "../reducers/taskReducer";

const TaskForm = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [newTask, setNewTask] = useState("");

  const handleChanges = e => {
    setNewTask(e.target.value);
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div>
      <form onSubmit={() => dispatch({ type: "ADD_TASK", payload: newTask })}>
        <input
          type="text"
          name="task"
          value={newTask}
          onChange={handleChanges}
        />
        <button type="submit">Add Task</button>
      </form>
      <button onClick={handleClear}>Clear Completed</button>
    </div>
  );
};

export default TaskForm;
