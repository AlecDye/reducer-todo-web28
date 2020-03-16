export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 2342341324
  },
  {
    item: "Do the dishes",
    completed: false,
    id: 2342341324
  }
];

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
