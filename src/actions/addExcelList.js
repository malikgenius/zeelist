import { firebase } from "../firebase/firebase";

export const addExcelList = file => ({
  type: "ADD_EXCELLIST",
  file
});
export const startAddExcelList = values => {
  return dispatch => {
    return firebase
      .database()
      .ref("/admins/emplist")
      .set(values)
      .then(() => {
        dispatch(addExcelList({ values }));
      });
  };
};

export const SetFile = list => {
  return {
    type: "SET_EXCELLIST",
    list
  };
};

// export const startSetFile = () => {
//   return dispatch => {
//     return firebase
//       .database()
//       .ref("/admins/emplist")
//       .on("value", snapshot => {
//         dispatch(SetFile(snapshot.val()));
//       });
//   };
// };

export const startSetFile = () => {
  return dispatch => {
    return firebase
      .database()
      .ref("/admins/emplist")
      .once("value")
      .then(snapshot => {
        dispatch(SetFile(snapshot.val()));
      });
  };
};
