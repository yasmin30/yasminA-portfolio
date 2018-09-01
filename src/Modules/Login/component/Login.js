import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: ""
    };
    this.setUserId = this.setUserId.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.handle = this.handle.bind(this);
  }
  setUserId(e) {
    this.setState({ userId: e.target.value });
  }
  setPassword(e) {
    this.setState({ password: e.target.value });
  }
  handle() {
    let data = {
      userId: this.state.userId,
      password: this.state.password
    };
    this.props.submit(data);
  }
  render() {
    return (
      <div>
        Login Id{" "}
        <input
          type="text"
          value={this.state.userId}
          onChange={this.setUserId}
        />
        <br />
        <br />
        Password{" "}
        <input
          type="text"
          value={this.state.password}
          onChange={this.setPassword}
        />
        <br />
        <br />
        <button onClick={this.handle}>submit</button>
      </div>
    );
  }
}

export { Login };
