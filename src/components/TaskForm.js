import React, { useState } from "react";

// import { taskReducer, initialState } from "../reducers/taskReducer";

const TaskForm = props => {
  //   const [state, dispatch] = useReducer(taskReducer, initialState);
  const [newTask, setNewTask] = useState("");

  //   const handleChanges = e => {
  //     setNewTask(e.target.value);
  //   };

  //   const handleClear = () => {
  //     dispatch({ type: "CLEAR_COMPLETED" });
  //   };

  const handleSubmit = e => {
    e.preventDefault();
    props.handleNewTask(newTask);
    setNewTask("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={newTask}
          onChange={e => {
            setNewTask(e.target.value);
          }}
        />
        <button type="submit">Add Task</button>
      </form>
      {/* <button onClick={handleClear}>Clear Completed</button> */}
    </div>
  );
};

export default TaskForm;
