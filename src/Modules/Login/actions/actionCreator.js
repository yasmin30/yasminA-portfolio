import api from "../../../api";
const loginSuccess = data => {
  return {
    type: "LOGIN_SUCCESS",
    data
  };
};

export const login = data => dispatch => {
  var req = data;
  api.login(req, response => {
    console.log(response);
    dispatch(loginSuccess(response.data));
  });
};
