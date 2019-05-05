import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {

    if (this.props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }

    const {username, password} = this.state
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your covert account
              </p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={this.onChange}
                />

                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={this.onChange}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
