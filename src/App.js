import React, { useReducer } from "react";
import { taskReducer, initialState } from "./reducers/taskReducer";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const handleNewTask = item => {
    const newTask = {
      item,
      completed: false,
      id: Date.now()
    };
    dispatch({ type: "ADD_TASK", payload: newTask });
  };
  const handleToggle = item => {
    dispatch({ type: "TOGGLE_TASK", payload: item });
  };
  const handleClear = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  console.log(state.taskData);
  return (
    <div className="App">
      <TaskForm handleNewTask={handleNewTask} />
      <TaskList state={state.taskData} handleToggle={handleToggle} />
      <button onClick={handleClear}>Clear Completed</button>
    </div>
  );
}

export default App;
