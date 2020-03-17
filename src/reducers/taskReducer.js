export const initialState = {
  taskData: [
    {
      item: "Learn about reducers",
      completed: false,
      id: Date.now()
    }
  ]
};

const ADD_TASK = "ADD_TASK";
const TOGGLE_TASK = "TOGGLE_TASK";
const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskData: [...state.taskData, action.payload]
      };
    case TOGGLE_TASK:
      return {
        taskData: state.taskData.map(item =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        )
      };
    case CLEAR_COMPLETED:
      return {
        taskData: state.taskData.filter(item => !item.completed)
      };
    default:
      return state;
  }
};
