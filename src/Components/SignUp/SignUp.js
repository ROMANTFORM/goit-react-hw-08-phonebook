import React, { Component } from 'react';
import { connect } from 'react-redux';
// import register from '../../redux/auth/auth-operations';
import * as authOperations  from '../../redux/auth/auth-operations';


class SignUp extends Component{
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = evt => {
        const { name, value } = evt.target;

        this.setState({ [name]: value })
    };

    handleSubmit = evt => {
      evt.preventDefault();
      
      this.props.onRegister(this.state);
        console.log('login :', this.state.login);
        console.log('email :', this.state.email);
      console.log('password :', this.state.password);

        this.reset();
    };
    
    reset = () => {
        this.setState({ name: "", email: "", password: "" });
    };

    render() {
        const { name, email, password } = this.state;

        return (
             <>
               <form className="form" onSubmit={this.handleSubmit}>
      <div className="title">Welcome</div>
      <div className="subtitle">Let's create your account!</div>
      <div className="input-container ic1">
        <input id="name" className="input" type="text" placeholder=" " value={name} name="name" onChange={this.handleChange} />
        <div className="cut"></div>
        <label htmlFor="name" className="placeholder">Name</label>
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" " value={email} name="email" onChange={this.handleChange} />
        <div className="cut cut-short"></div>
        <label htmlFor="email" className="placeholder">Email</label>
      </div>              
      <div className="input-container ic2">
        <input id="password" className="input" type="text" placeholder=" " value={password} name="password" onChange={this.handleChange} />
        <div className="cut"></div>
        <label htmlFor="password" className="placeholder">Password</label>
      </div>
      
      <button type="text" className="submit">submit</button>
    </form> 
            </>
         )
    };
};

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (data) => dispatch(authOperations.register(data))
//  });

export default connect(null, mapDispatchToProps)(SignUp);