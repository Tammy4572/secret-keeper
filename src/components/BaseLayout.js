import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions';
import '../styles/App.css';
// import NavBar from './NavBar';

class BaseLayout extends Component {
     constructor(props){
          super(props);
     }
     handleLogoutAction = (event) => {
        event.preventDefault();
        this.props.logout();
     }
     render(){
          return(
               <div className="container-fluid nav">
                    <nav className="row navbar navbar-inverse">
                         <div className="container-fluid header">
                              <ul className="nav navbar-nav">
                                <li className="active"><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/Register">Register</NavLink></li>
                                <li><NavLink to="/Login">Log In</NavLink></li>
                              </ul>
                         </div>
                         <ul className="nav navbar-nav navbar-right">
                           <li><input type="submit" className="btn btn-danger logout-btn" value="Log Out" onClick={this.handleLogoutAction}/></li>
                         </ul>
                    </nav>
                         {this.props.children}
               </div>
          );
     }
}

const mapStateToProps = (state) => {
     return {
          state
     }
}

function mapDispatchToProps(dispatch) { return {
     logout: () => {
          return dispatch(logout())
     }
}}

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout);
