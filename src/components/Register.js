import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../actions";

class Register extends Component {
     constructor(props) {
          super(props);
          this.state = {
               name: "",
               email: "",
               password: "",
               message: "",
               isRegistered: false
          }
     }
     updateState = (field) => {
          return (event) => {
               this.setState({[field]: event.target.value })
          }
     }
     register = (event) => {
          event.preventDefault();
          this.props.register(this.state);
          this.setState({isRegistered: true})
     }
     render(){
          return (
               <div className="Register container">
                    <form onSubmit={this.register}>
                         <fieldset>
                              <legend>{this.props.loggedIn
                              ? "Register as a different user"
                              : "Register"}</legend>
                         <div className="form-group">
                              <label>Name</label>
                              <input type="text" value={this.state.name} onChange={this.updateState('name')} placeholder="Your Full Name"/>
                         </div>
                         <div className="form-group">
                              <label>Email address</label>
                              <input type="email" value={this.state.email} onChange={this.updateState('email')} placeholder="Your Email"/>
                         </div>
                         <div className="form-group">
                              <label>Password</label>
                              <input type="password" value={this.state.password} onChange={this.updateState('password')} placeholder="Create a Password"/>
                         </div>
                         <div className="form-group">
                              <label>Message</label>
                              <input className="message-area" type="textarea" value={this.state.message} onChange={this.updateState('message')}/>
                         </div>
                         <button type="submit" className="btn btn-primary" >Register</button>
                    </fieldset>
                    </form>
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
        register: (user) => dispatch(register(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
