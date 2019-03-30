import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signIn } from "../actions";

class Login extends React.Component {
  componentDidUpdate() {
    if (this.props.isSignedIn) this.props.history.push("/games");
  }

  onSubmit = formValues => {
    this.props.signIn(formValues);
  };

  renderError = () => {
    if (this.props.isLoginFailed) {
      return (
        <div className="ui grid centered error message">
          <div className="header">Login Failed</div>
        </div>
      );
    }
  };

  renderUsername = ({ input, meta }) => {
    const className = `ui icon input ${
      meta.error && meta.touched ? "error" : ""
    }`;
    return (
      <div className="required field">
        <div className={className}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            {...input}
          />
          <i className="user icon" />
        </div>
      </div>
    );
  };

  renderPassword = ({ input, meta }) => {
    const className = `ui icon input ${
      meta.error && meta.touched ? "error" : ""
    }`;
    return (
      <div className="required field">
        <div className={className}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...input}
          />
          <i className="lock icon" />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="login">
        <div className="ui grid centered">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <div className="fields">
              <Field name="username" component={this.renderUsername} />
              <Field name="password" component={this.renderPassword} />
              <div className="field">
                <div className="ui icon input">
                  <input type="submit" value="Login" />
                  <i className="right chevron icon" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <br />
        {this.renderError()}
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = "Enter a username";
  }

  if (!values.password) {
    errors.password = "Enter a password";
  }

  return errors;
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    isLoginFailed: state.auth.isLoginFailed
  };
};

const formWrapped = reduxForm({
  form: "loginForm",
  validate
})(Login);

export default connect(
  mapStateToProps,
  { signIn }
)(formWrapped);
