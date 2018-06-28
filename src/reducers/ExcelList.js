// const initialstate = [];

export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_EXCELLIST":
      return (state = action.list);
    case "SET_EXCELLIST":
      return (state = action.list);
    default:
      return state;
  }
};
