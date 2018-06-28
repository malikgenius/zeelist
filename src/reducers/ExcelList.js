// const initialstate = [];

export default (state = {}, action) => {
  console.log(action.list);
  switch (action.type) {
    case "ADD_EXCELLIST":
      return (state = action.list);
    default:
      return state;
  }
};
