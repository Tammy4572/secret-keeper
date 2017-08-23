import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../actions';

import Dashboard from './Dashboard';

class Login extends Component {
     constructor(props){
          super(props);
          this.state = {
               email: '',
               password: ''
          }
          // this.onChange = this.onChange.bind(this);
          // this.onSave = this.onSave.bind(this);
     }
     updateState = (field) => {
          return (event) => {
               this.setState({[field]: event.target.value})
          }
     }
     login = (event) => {
          event.preventDefault();

          const login = this.props.login;
          login(this.state.email, this.state.password, () => {
               this.setState({
                    email: "",
                    password: ""
               });
          });
     }

     render(){
          return (
               <div className="Login">
                    {this.props.loggedIn
                    ? <Dashboard />
                    :
                <form onSubmit={this.login}>
                    <fieldset>
                              <div className="form-group">
                                   <label>Email address</label>
                                   <input type="email" className="form-control" value={this.state.email} onChange={this.updateState('email')} placeholder="Enter email"/>
                              </div>
                              <div className="form-group">
                                   <label>Password</label>
                                   <input type="password" className="form-control" value={this.state.password} onChange={this.updateState('password')} placeholder="Password"/>
                              </div>
                              <button type="submit" className="btn btn-primary">Submit</button>
                         </fieldset>
                         </form>
                    }
                    </div>
          );
     }
}
const mapStateToProps = (state) => {
     return {
          loggedIn: !!state.token
     }
}

const mapDispatchToProps = (dispatch) => {
     return {
          login: (email, password, callback) => dispatch(login(email, password, callback))
     }
}

export default connect(mapStateToProps, mapDispatchToProps) (Login);
