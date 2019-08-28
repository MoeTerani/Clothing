import React, { Component } from 'react';
import './sign-in.style.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <label for='email'>Email</label>
          <input
            name='email'
            id='email'
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
            required
          ></input>
          <label for='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            required
          ></input>

          <input type='submit' value='submit form' />
        </form>
      </div>
    );
  }
}

export default SignIn;
