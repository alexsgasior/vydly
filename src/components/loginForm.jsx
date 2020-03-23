import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  username = React.createRef();

  state = {
    data: { username: "", password: "" },
    errors: {} // reusable
  };
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    // cal the server > save changes >>redirect user
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
