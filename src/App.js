import React, { useReducer } from "react";
import { taskReducer, initialState } from "./reducers/taskReducer";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

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
  return (
    <div className="App">
      <TaskForm handleNewTask={handleNewTask} />
      <TaskList state={state.taskData} handleToggle={handleToggle} />
    </div>
  );
}

export default App;
