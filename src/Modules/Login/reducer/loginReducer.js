const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, data: action.data };

    default:
      return state;
  }
};

export default loginReducer;
