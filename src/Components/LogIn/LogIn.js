import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';


class LogIn extends Component{
  state = {
    email: '',
    password: '',
  };
  
  handleChange = evt => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
   };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onLogin(this.state);

    console.log("email :", this.state.email);
    console.log("password :", this.state.password);
    this.reset();
  };
  
  reset = () => {
    this.setState({ email: "", password: "" });
  };
  
  render() {
    const { email, password } = this.state;

        return (
            <>
               <form className="form" onSubmit={this.handleSubmit}>
      <div className="title">Hi!</div>
      <div className="subtitle">Please, log in!</div>
      <div className="input-container ic2">
        <input id="email1" className="input" type="text" placeholder=" " value={email} name="email" onChange={this.handleChange} />
        <div className="cut cut-short"></div>
        <label htmlFor="email1" className="placeholder">Email</label>
      </div>
      <div className="input-container ic2">
        <input id="password1" className="input" type="text" placeholder=" " value={password} name="password" onChange={this.handleChange} />
        <div className="cut"></div>
        <label htmlFor="password1" className="placeholder">Password</label>
      </div>
      
      <button type="text" className="submit">submit</button>
    </form> 
            </>
        );
    };
};

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LogIn);