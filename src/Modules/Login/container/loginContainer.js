import React from "react";
import { connect } from "react-redux";
import { Login } from "../component";
import { login } from "../actions/actionCreator.js";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }
  submit(data) {
    this.props.SubmitLogin(data);
  }

  render() {
    return (
      <div>
        <Login submit={this.submit} />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    SubmitLogin: data => {
      console.log(data);
      dispatch(login(data));
    }
  };
};

const LoginContainerComp = connect(null, mapDispatchToProps)(LoginContainer);
export { LoginContainerComp };
