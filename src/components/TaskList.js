import React from "react";

import TaskItem from "./TaskItem";

const TaskList = props => {
  return (
    <div>
      {props.state.map((event, index) => {
        return (
          <TaskItem
            key={index}
            state={event}
            handleToggle={props.handleToggle}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
