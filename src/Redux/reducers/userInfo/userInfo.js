export default (state = { userData: {} }, action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return {
        ...state,
        userData: action.userData
      };
    default:
      return state;
  }
};
