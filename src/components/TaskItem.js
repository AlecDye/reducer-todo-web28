import React from "react";

const TaskItem = props => {
  return (
    <div
      className={props.state.completed ? "toggled" : " "}
      onClick={e => {
        e.preventDefault();
        props.handleToggle(props.state.id);
      }}
    >
      <p>{props.state.item}</p>
    </div>
  );
};

export default TaskItem;
