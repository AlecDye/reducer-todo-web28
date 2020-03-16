import React from "react";

import TaskItem from "./TaskItem";

const TaskList = props => {
  return (
    <div>
      <TaskItem handleToggle={props.handleToggle} />
    </div>
  );
};

export default TaskList;
